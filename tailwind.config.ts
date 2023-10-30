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
        mono: ["GeistMono", ...fontFamily.mono],
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
      },
      keyframes: {
        "loading-indeterminate-horizontal": {
          "0%": { transform: "translateX(0) scaleX(0)" },
          "50%": { transform: "translateX(0) scaleX(0.4)" },
          "100%": { transform: "translateX(100%) scaleX(0.9)" },
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
