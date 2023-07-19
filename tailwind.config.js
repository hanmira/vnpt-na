/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      quicksand: ["Quicksand", "sans-serif"],
      monste: ["Montserrat", "sans-serif"],
    },
    animation: {
      flash: "flash 0.5s ease-in-out",
      fadeIn: "fadeIn 0.5s ease-linear",
      slideIn: "slideIn 0.5s ease-linear",
    },
    keyframes: {
      flash: {
        "0%": {
          left: "-100%",
        },
        "100%": {
          top: "50%",
          left: "70%",
        },
      },
      fadeIn: {
        "0%": {
          opacity: "0",
        },
        "100%": {
          opacity: "1",
        },
      },
      slideIn: {
        "0%": {
          left: "-100%",
        },
        "100%": {
          left: "0",
        },
      },
    },
    backgroundImage: {
      "hero-pattern":
        "url('https://images.pexels.com/photos/1556665/pexels-photo-1556665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      "login-pattern":
        "url('https://images.pexels.com/photos/265216/pexels-photo-265216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
    },
  },
  plugins: [],
};
