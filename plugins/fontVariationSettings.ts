import plugin from "tailwindcss/plugin"

// Because Geist is a variable font we need to adjust the font-weight utilities to handle the font-variation-settings property (which replaces font-weight)
// Geist supports font weights betwen 32 and 240

// Variable fonts
const fontVariationSettings = plugin(function ({ addUtilities }) {
  addUtilities({
    ".font-thin": {
      // fontWeight: 100,
      fontVariationSettings: '"wght" 32',
      "&.italic": {
        fontVariationSettings: '"slnt" 1, "wght" 32',
      },
    },
  })

  addUtilities({
    ".font-extralight": {
      // fontWeight: 200,
      fontVariationSettings: '"wght" 48',
      "&.italic": {
        fontVariationSettings: '"slnt" 1, "wght" 48',
      },
    },
  })

  addUtilities({
    ".font-light": {
      // fontWeight: 300,
      fontVariationSettings: '"wght" 64',
      "&.italic": {
        fontVariationSettings: '"slnt" 1, "wght" 64',
      },
    },
  })

  addUtilities({
    ".font-normal": {
      // fontWeight: 400,
      fontVariationSettings: '"wght" 80',
      "&.italic": {
        fontVariationSettings: '"slnt" 1, "wght" 80',
      },
    },
  })

  addUtilities({
    ".font-medium": {
      // fontWeight: 500,
      fontVariationSettings: '"wght" 96',
      "&.italic": {
        fontVariationSettings: '"slnt" 1, "wght" 96',
      },
    },
  })

  addUtilities({
    ".font-semibold": {
      // fontWeight: 600,
      fontVariationSettings: '"wght" 112',
      "&.italic": {
        fontVariationSettings: '"slnt" 1, "wght" 112',
      },
    },
  })

  addUtilities({
    ".font-bold": {
      // fontWeight: 700,
      fontVariationSettings: '"wght" 128',
      "&.italic": {
        fontVariationSettings: '"slnt" 1, "wght" 128',
      },
    },
  })

  addUtilities({
    ".font-extrabold": {
      // fontWeight: 800,
      fontVariationSettings: '"wght" 160',
      "&.italic": {
        fontVariationSettings: '"slnt" 1, "wght" 160',
      },
    },
  })

  addUtilities({
    ".font-black": {
      // fontWeight: 900,
      fontVariationSettings: '"wght" 192',
      "&.italic": {
        fontVariationSettings: '"slnt" 1, "wght" 192',
      },
    },
  })

  addUtilities({
    ".font-extrablack": {
      // fontWeight: 1000,
      fontVariationSettings: '"wght" 224',
      "&.italic": {
        fontVariationSettings: '"slnt" 1, "wght" 224',
      },
    },
  })

  // addUtilities({
  //   ".font-ultra": {
  fontWeight: 1100,
    //     fontVariationSettings: '"wght" 240',
    //     "&.italic": {
    //       fontVariationSettings: '"slnt" 1, "wght" 240',
    //     },
    //   },
    // })

    addUtilities({
      ".italic": {
        fontStyle: "italic",
        fontVariationSettings: '"slnt" 1',
      },
    })
})

module.exports = fontVariationSettings
