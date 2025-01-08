module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        neutral: {
          300: "#D4D4D4",
        },
        slate: {
          300: "#CBD5E1",
        },
      },
      boxShadow: {
        custom: "0px 0px 0px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
