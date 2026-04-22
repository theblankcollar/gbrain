import puppeteer from "/root/.npm/_npx/702923228c2ce1e6/node_modules/puppeteer-core/lib/esm/puppeteer/puppeteer-core.js";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const HTML_URL = `file://${resolve(HERE, "index.html")}`;
const CHROME =
  "/root/.cache/hyperframes/chrome/chrome-headless-shell/linux-131.0.6778.85/chrome-headless-shell-linux64/chrome-headless-shell";

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "shell",
  protocolTimeout: 120000,
  args: [
    "--no-sandbox",
    "--disable-setuid-sandbox",
    "--disable-dev-shm-usage",
    "--disable-gpu",
  ],
});

const page = await browser.newPage();
await page.setViewport({ width: 1920, height: 1080 });
page.on("console", (msg) => console.log(`[page:${msg.type()}]`, msg.text()));
page.on("pageerror", (err) => console.log(`[page:err]`, err.message));
page.on("requestfailed", (req) =>
  console.log(`[page:reqfail]`, req.url(), req.failure()?.errorText),
);

console.log("loading...");
try {
  await page.goto(HTML_URL, { waitUntil: "domcontentloaded", timeout: 30000 });
  console.log("loaded, waiting 5s...");
  await new Promise((r) => setTimeout(r, 5000));
  const state = await page.evaluate(() => ({
    hasGSAP: typeof window.gsap !== "undefined",
    gsapVersion: window.gsap?.version,
    hasTimelines: typeof window.__timelines !== "undefined",
    timelineKeys: window.__timelines ? Object.keys(window.__timelines) : null,
    scripts: [...document.querySelectorAll("script")].map((s) => s.src || "(inline)"),
    error: window.__lastError,
  }));
  console.log("state:", JSON.stringify(state, null, 2));
} catch (e) {
  console.log("goto failed:", e.message);
}
await browser.close();
