import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./ui/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: "class",
  theme: {
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "1280px",
        "2xl": "1536px",
      },
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        sans: [
          `Geist, ${fontFamily.sans}`,
          {
            fontVariationSettings: '"wght" 80',
          },
        ],
        mono: [
          `GeistMono, ${fontFamily.mono}`,
          {
            fontVariationSettings: '"wght" 80',
          },
        ],
      },
      // screens: {
      //   '2xl': '1440px',
      // },
      zIndex: {
        "-10": "-10",
      },
      strokeWidth: {
        0.5: "0.5",
        1.5: "1.5",
        2.5: "2.5",
      },
      animation: {
        spin: "spin 10s linear infinite",
        loading: "loading-indeterminate-horizontal 1.4s infinite linear",
        "font-weight-grow": "font-weight-grow 1s infinite alternate",
        "font-weight-shrink": "font-weight-shrink 1s infinite alternate",
      },
      keyframes: {
        "loading-indeterminate-horizontal": {
          "0%": { transform: "translateX(0) scaleX(0)" },
          "50%": { transform: "translateX(0) scaleX(0.4)" },
          "100%": { transform: "translateX(100%) scaleX(0.9)" },
        },
        "font-weight-grow": {
          "0%": { "font-variation-settings": '"wght" 32' },
          "100%": { "font-variation-settings": '"wght" 96' },
        },
        "font-weight-shrink": {
          "0%": { "font-variation-settings": '"wght" 96' },
          "100%": { "font-variation-settings": '"wght" 32' },
        },
      },
    },
  },
  corePlugins: {
    fontWeight: false,
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("./plugins/fontVariationSettings"),
  ],
} satisfies Config
