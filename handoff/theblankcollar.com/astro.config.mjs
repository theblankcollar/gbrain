// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// NOTE: @astrojs/sitemap is temporarily disabled pending a version bump
// compatible with Astro 4 hybrid output + Vercel adapter. Re-enable in Phase 6.
export default defineConfig({
  site: "https://theblankcollar.com",
  output: "hybrid",
  adapter: vercel({
    webAnalytics: { enabled: false },
    imageService: true,
  }),
  integrations: [tailwind({ applyBaseStyles: false })],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
