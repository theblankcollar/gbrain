import type { Config } from "tailwindcss";

/**
 * The Blank Collar — Tailwind config.
 * Tokens mirror docs/design-system.md §2–§5. Keep them in lockstep.
 */
const config: Config = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue,svelte}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          magenta: "#FA2BB8",
          lime: "#D6F41F",
          mint: "#3CFFD0",
          red: "#FF3D00",
          ink: "#1E1C1C",
          paper: "#FFFFFF",
        },
        paper: {
          1: "#FFFFFF",
          2: "#F5F5F3",
          3: "#E9E8E4",
          "line-soft": "rgba(30,28,28,0.15)",
        },
        ink: {
          1: "#1E1C1C",
          2: "#2A2828",
          3: "#3D3B3B",
          line: "#1E1C1C",
        },
        surface: {
          DEFAULT: "rgb(var(--surface) / <alpha-value>)",
          2: "rgb(var(--surface-2) / <alpha-value>)",
          3: "rgb(var(--surface-3) / <alpha-value>)",
        },
        text: {
          DEFAULT: "rgb(var(--text) / <alpha-value>)",
          muted: "rgb(var(--text-muted) / <alpha-value>)",
        },
        border: {
          DEFAULT: "rgb(var(--border) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "#FA2BB8",
          contrast: "#FFFFFF",
        },
      },

      backgroundImage: {
        "sig-lime-magenta": "linear-gradient(135deg, #D6F41F 0%, #FA2BB8 100%)",
        "mint-magenta": "linear-gradient(135deg, #3CFFD0 0%, #FA2BB8 100%)",
        "white-magenta": "linear-gradient(135deg, #FFFFFF 0%, #FA2BB8 100%)",
        "red-magenta": "linear-gradient(135deg, #FF3D00 0%, #FA2BB8 100%)",
        "step-ellipse":
          "radial-gradient(ellipse at center, #D6F41F 0%, #FF9A3D 55%, #FA2BB8 100%)",
      },

      fontFamily: {
        sans: [
          "PP Neue Machina",
          "Inter",
          "Helvetica Neue",
          "Arial",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "PP Neue Machina",
          "Inter",
          "Helvetica Neue",
          "Arial",
          "system-ui",
          "sans-serif",
        ],
      },

      fontWeight: {
        regular: "400",
        ultrabold: "900",
      },

      fontSize: {
        micro: ["0.75rem", { lineHeight: "1.4" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
        body: ["clamp(1rem, 0.95rem + 0.25vw, 1.0625rem)", { lineHeight: "1.6" }],
        "body-lg": ["clamp(1.125rem, 1.05rem + 0.4vw, 1.25rem)", { lineHeight: "1.55" }],
        h4: ["clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem)", { lineHeight: "1.25" }],
        h3: ["clamp(1.5rem, 1.25rem + 1.25vw, 2rem)", { lineHeight: "1.15" }],
        h2: ["clamp(2rem, 1.5rem + 2.5vw, 3rem)", { lineHeight: "1.05" }],
        h1: ["clamp(2.5rem, 1.5rem + 5vw, 4.5rem)", { lineHeight: "1.0" }],
        display: ["clamp(3.5rem, 1.5rem + 10vw, 7.5rem)", { lineHeight: "0.95" }],
      },

      letterSpacing: {
        tightest: "-0.03em",
        tighter: "-0.02em",
      },

      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "16px",
        xl: "24px",
        full: "9999px",
      },

      boxShadow: {
        sm: "0 1px 2px 0 rgba(30,28,28,0.06)",
        md: "0 4px 12px -2px rgba(30,28,28,0.10)",
        lg: "0 12px 32px -6px rgba(30,28,28,0.14)",
        "sm-dark": "0 1px 2px 0 rgba(0,0,0,0.5)",
        "md-dark": "0 4px 12px -2px rgba(0,0,0,0.6)",
        "lg-dark": "0 12px 32px -6px rgba(0,0,0,0.7)",
      },

      transitionTimingFunction: {
        "out-quint": "cubic-bezier(0.22, 1, 0.36, 1)",
      },

      transitionDuration: {
        200: "200ms",
        400: "400ms",
        700: "700ms",
      },

      maxWidth: {
        prose: "66ch",
      },
    },
  },
  plugins: [],
};

export default config;
