module.exports = {
  important: true,
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes:{
        fallDown:{
          '0%,100%':{}
        }
      },
      colors: {
        "smear-green": "rgb(115, 128, 71)",
        "border-smear-green": "#A4B375",
      },
    },
  },
  plugins: [],
};
