"use client";

import { useEffect, useRef, useState } from "react";
import { toPng } from "html-to-image";
import { themes, type Theme, defaultTheme } from "@/lib/themes";
import { DefinitionEntry } from "./definition-entry";

const STORAGE_KEY = "blankcollar.theme";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.style.setProperty("--bg", theme.bg);
  root.style.setProperty("--fg", theme.fg);
  root.style.setProperty("--accent", theme.accent);
  root.style.setProperty("--muted", theme.muted);
}

export function Controls() {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [customBg, setCustomBg] = useState<string>(defaultTheme.bg);
  const [customFg, setCustomFg] = useState<string>(defaultTheme.fg);
  const [exporting, setExporting] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    const found = saved ? themes.find((t) => t.id === saved) : null;
    const initial = found ?? defaultTheme;
    setTheme(initial);
    setCustomBg(initial.bg);
    setCustomFg(initial.fg);
    applyTheme(initial);
  }, []);

  function pick(next: Theme) {
    setTheme(next);
    setCustomBg(next.bg);
    setCustomFg(next.fg);
    applyTheme(next);
    window.localStorage.setItem(STORAGE_KEY, next.id);
  }

  function onCustom(bg: string, fg: string) {
    setCustomBg(bg);
    setCustomFg(fg);
    const merged: Theme = { ...theme, bg, fg };
    applyTheme(merged);
  }

  async function exportPng() {
    if (!cardRef.current) return;
    setExporting(true);
    try {
      const node = cardRef.current;
      const dataUrl = await toPng(node, {
        pixelRatio: 2,
        cacheBust: true,
        backgroundColor: theme.bg,
        width: 1080,
        height: 1080,
      });
      const link = document.createElement("a");
      link.download = `blankcollar-definition-${theme.id}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error(err);
      alert("Export failed. Try a different browser or theme.");
    } finally {
      setExporting(false);
    }
  }

  return (
    <>
      {/* Control bar — hidden in the exported PNG via data attr */}
      <div
        data-export-exclude
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex flex-wrap items-center gap-2 rounded-full px-3 py-2 backdrop-blur-md shadow-lg"
        style={{
          backgroundColor: "color-mix(in srgb, var(--fg) 8%, transparent)",
          border: "1px solid color-mix(in srgb, var(--fg) 15%, transparent)",
        }}
      >
        <div className="flex items-center gap-1.5 pr-2 border-r" style={{ borderColor: "color-mix(in srgb, var(--fg) 15%, transparent)" }}>
          {themes.map((t) => (
            <button
              key={t.id}
              type="button"
              aria-label={`Theme: ${t.name}`}
              title={t.name}
              onClick={() => pick(t)}
              className={`h-7 w-7 rounded-full cursor-pointer transition-transform ${
                theme.id === t.id ? "scale-110 ring-2" : "hover:scale-105"
              }`}
              style={{
                backgroundColor: t.bg,
                borderColor: t.fg,
                borderWidth: 1,
                borderStyle: "solid",
                // @ts-expect-error CSS var for ring color
                "--tw-ring-color": "var(--accent)",
              }}
            />
          ))}
        </div>

        <label
          className="flex items-center gap-1.5 text-xs cursor-pointer"
          style={{ fontFamily: "var(--font-mono)" }}
          title="Background color"
        >
          <span>bg</span>
          <input
            type="color"
            value={customBg}
            onChange={(e) => onCustom(e.target.value, customFg)}
            className="h-6 w-6 cursor-pointer rounded border-0 bg-transparent p-0"
          />
        </label>

        <label
          className="flex items-center gap-1.5 text-xs cursor-pointer"
          style={{ fontFamily: "var(--font-mono)" }}
          title="Text color"
        >
          <span>fg</span>
          <input
            type="color"
            value={customFg}
            onChange={(e) => onCustom(customBg, e.target.value)}
            className="h-6 w-6 cursor-pointer rounded border-0 bg-transparent p-0"
          />
        </label>

        <button
          type="button"
          onClick={exportPng}
          disabled={exporting}
          className="ml-1 px-3 py-1.5 text-xs font-[600] rounded-full cursor-pointer disabled:opacity-50 transition-opacity hover:opacity-90"
          style={{
            backgroundColor: "var(--accent)",
            color: "var(--bg)",
            fontFamily: "var(--font-mono)",
          }}
        >
          {exporting ? "exporting…" : "export png ↓"}
        </button>
      </div>

      {/* Off-screen 1080×1080 card used for PNG export */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          left: -99999,
          top: 0,
          pointerEvents: "none",
        }}
      >
        <div
          ref={cardRef}
          style={{
            width: 1080,
            height: 1080,
            backgroundColor: theme.bg,
            color: theme.fg,
            padding: 80,
            fontFamily: "var(--font-sans)",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <DefinitionEntry variant="card" />
        </div>
      </div>
    </>
  );
}
