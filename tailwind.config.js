export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        watercolor: "#3344c1",
        landcolor: "#7cc133",
      },
      keyframes: {
        startround: {
          "0%, 75%": { filter: "brightness(500%)", boxShadow: "none" },
          "100%": {
            filter: "brightness(100%)",
            boxShadow:
              "inset 0em 0.5em rgba(255,255,255,0.25), inset 0em -0.5em rgba(0,0,0,0.25)",
          },
        },
        round1: {
          "0%": { left: "-2em", opacity: "100%", transform: "skewX(0deg) rotate(0deg)" },
          "30%": { left: "-6em", opacity: "100%", transform: "skewX(-25deg) rotate(25deg)" },
          "31%": { left: "-6em", opacity: "0%", transform: "skewX(-25deg) rotate(25deg)" },
          "35%": { left: "7em", opacity: "0%", transform: "skewX(25deg) rotate(-25deg)" },
          "45%": { left: "7em", opacity: "100%", transform: "skewX(25deg) rotate(-25deg)" },
          "100%": { left: "-2em", opacity: "100%", transform: "skewX(0deg) rotate(0deg)" },
        },
        round2: {
          "0%": { left: "5em", opacity: "100%", transform: "skewX(0deg) rotate(0deg)" },
          "75%": { left: "-7em", opacity: "100%", transform: "skewX(-25deg) rotate(25deg)" },
          "76%": { left: "-7em", opacity: "0%", transform: "skewX(-25deg) rotate(25deg)" },
          "77%": { left: "8em", opacity: "0%", transform: "skewX(25deg) rotate(-25deg)" },
          "80%": { left: "8em", opacity: "100%", transform: "skewX(25deg) rotate(-25deg)" },
          "100%": { left: "5em", opacity: "100%", transform: "skewX(0deg) rotate(0deg)" },
        },
      },
      animation: {
        startround: "startround 1s 1",
        round1: "round1 5s infinite linear",
        round1Delay: "round1 5s infinite linear 0.75s",
        round2: "round2 5s infinite linear",
        round2Delay: "round2 5s infinite linear 0.75s",
      },
    },
  },
  plugins: [],
};
