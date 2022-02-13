module.exports = {
  important: true,
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fallDown: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      Animation: {
        fallDown: 'fallDown 1s ease-in-out infinite',
      },
      colors: {
        "smear-green": "rgb(115, 128, 71)",
        "border-smear-green": "#A4B375",
      },
    },
  },
  plugins: [],
};
