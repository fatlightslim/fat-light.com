module.exports = {
  // darkMode: 'media',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: [
      "./components/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      safelist: [
        /^bg-/,
        /^text-/,
        /^from-/,
        /^via-/,
        /^to-/,
        "hover:bg-indigo-700",
        "transition",
        "ease-in",
        "duration-150",
        "opacity-0",
        "translate-y-1",
        "ease-out",
        "duration-200",
        "opacity-100",
        "translate-y-0",
      ],
      // safelist: [
      //   "hover:bg-indigo-700",
      //   "lg:col-start-6",
      //   "lg:col-end-8",
      //   "lg:row-start-2",
      //   "lg:row-end-3",
      //   "lg:mx-0",
      //   "lg:max-w-none",
      //   "lg:col-start-1",
      //   "lg:row-start-2",
      //   "lg:row-end-3",
      //   "lg:col-end-3",
      // ],
    },
  },
  theme: {
    // extend: {
    //   colors: {
    //     "accent-1": "#333",
    //   },
    // },
    cursor: {
      auto: "auto",
      default: "default",
      pointer: "pointer",
      wait: "wait",
      text: "text",
      move: "move",
      "not-allowed": "not-allowed",
      crosshair: "crosshair",
      "zoom-in": "zoom-in",
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      cursor: ['hover', 'focus']
    },
  },
  plugins: [
    // require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
}
