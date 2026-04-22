import puppeteer from "/root/.npm/_npx/702923228c2ce1e6/node_modules/puppeteer-core/lib/esm/puppeteer/puppeteer-core.js";
import { mkdir, rm } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const FRAMES_DIR = resolve(HERE, "frames");
const HTML_URL = `file://${resolve(HERE, "index.html")}`;
const FPS = 30;
const DURATION = 10;
const TOTAL = FPS * DURATION;
const CHROME =
  "/root/.cache/hyperframes/chrome/chrome-headless-shell/linux-131.0.6778.85/chrome-headless-shell-linux64/chrome-headless-shell";

await rm(FRAMES_DIR, { recursive: true, force: true });
await mkdir(FRAMES_DIR, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "shell",
  protocolTimeout: 600000,
  args: [
    "--no-sandbox",
    "--disable-setuid-sandbox",
    "--disable-dev-shm-usage",
    "--disable-gpu",
    "--hide-scrollbars",
    "--mute-audio",
  ],
});

const page = await browser.newPage();
page.on("console", (m) => console.log(`  [page:${m.type()}]`, m.text()));
page.on("pageerror", (e) => console.log(`  [page:err]`, e.message));
await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 });

console.log("[capture] loading page");
await page.goto(HTML_URL, { waitUntil: "domcontentloaded", timeout: 60000 });

console.log("[capture] waiting for timeline ready");
await new Promise((r) => setTimeout(r, 2000));
const ok = await page.evaluate(() => !!(window.__timelines && window.__timelines["cybee-intro"]));
if (!ok) {
  const dbg = await page.evaluate(() => ({
    gsap: typeof window.gsap,
    tls: Object.keys(window.__timelines || {}),
    err: window.onerror?.toString?.(),
  }));
  console.log("[capture] timeline missing. debug:", JSON.stringify(dbg));
  process.exit(1);
}
console.log("[capture] timeline ready");
await page.evaluate(async () => {
  if (document.fonts && document.fonts.ready) await document.fonts.ready;
  const v = document.getElementById("bg-video");
  if (v) {
    v.pause();
    v.muted = true;
    v.playsInline = true;
    v.preload = "auto";
    await new Promise((r) => {
      if (v.readyState >= 2) return r();
      const done = () => r();
      v.addEventListener("loadeddata", done, { once: true });
      v.addEventListener("canplay", done, { once: true });
      setTimeout(r, 5000);
    });
  }
});

console.log(`[capture] capturing ${TOTAL} frames`);
const started = Date.now();
for (let i = 0; i < TOTAL; i++) {
  const t = i / FPS;
  await page.evaluate(async (time) => {
    const tl = window.__timelines["cybee-intro"];
    tl.seek(time, false);
    const v = document.getElementById("bg-video");
    if (v) {
      await new Promise((r) => {
        const done = () => r();
        v.addEventListener("seeked", done, { once: true });
        try {
          v.currentTime = Math.min(time, v.duration || time);
        } catch (_) {
          r();
        }
        setTimeout(r, 400);
      });
    }
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
  }, t);
  const path = `${FRAMES_DIR}/frame_${String(i).padStart(5, "0")}.jpg`;
  await page.screenshot({ path, type: "jpeg", quality: 92, fullPage: false });
  if (i % 15 === 0) {
    const elapsed = ((Date.now() - started) / 1000).toFixed(1);
    console.log(`[capture] ${i + 1}/${TOTAL} (${elapsed}s elapsed)`);
  }
}

await browser.close();
console.log("[capture] done");
