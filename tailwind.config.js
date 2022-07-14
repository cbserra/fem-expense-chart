module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      colors: {
        "soft-red": "hsl(10, 79%, 65%)",
        "pale-soft-red": "hsla(10, 100%, 76%, 1)",
        cyan: "hsl(186, 34%, 60%)",
        "pale-cyan": "hsla(186, 49%, 80%, 1)",
        "dark-brown": "hsl(25, 47%, 15%)",
        "medium-brown": "hsl(28, 10%, 53%)",
        cream: "hsl(27, 66%, 92%)",
        "very-pale-orange": "hsl(33, 100%, 98%)",
        "card-white": "hsla(30, 100%, 98%, 1)",
      },
      fontSize: {
        base: "62.5%",
        sm: [
          "1.2rem",
          {
            lineHeight: "1.6rem",
          },
        ],
        md: [
          "1.5rem",
          {
            lineHeight: "2.0rem",
          },
        ],
        lg: [
          "1.8rem",
          {
            lineHeight: "2.4rem",
          },
        ],
        xl: [
          "2.4rem",
          {
            lineHeight: "3.1rem",
          },
        ],
        "2xl": [
          "3.2rem",
          {
            lineHeight: "4.0rem",
          },
        ],
        "3xl": [
          "4.8rem",
          {
            lineHeight: "6.2rem",
          },
        ],
      },
    },
    plugins: [],
  },
};