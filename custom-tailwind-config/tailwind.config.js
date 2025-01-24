/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      neutral: {
        0: "#ffffff",
        100: "#f6f6f6",
        900: "#101010",
        1000: "#000000"
      },
      alphaNetural: {
    "alphaNeutralLight_900": "rgba(255, 255, 255, 0.9000)",
    "alphaNeutralLight_800": "rgba(255, 255, 255, 0.7000)",
    "alphaNeutralLight_700": "rgba(255, 255, 255, 0.5500)",
    "alphaNeutralLight_600": "rgba(255, 255, 255, 0.3000)",
    "alphaNeutralLight_500": "rgba(255, 255, 255, 0.2000)",
    "alphaNeutralLight_400": "rgba(255, 255, 255, 0.1000)",
    "alphaNeutralLight_300": "rgba(255, 255, 255, 0.0500)"
      },
      alphaDark: {
    "alphaNeutralDark_900": "rgba(0, 0, 0, 0.9000)",
    "alphaNeutralDark_800": "rgba(0, 0, 0, 0.7000)",
    "alphaNeutralDark_700": "rgba(0, 0, 0, 0.5500)",
    "alphaNeutralDark_600": "rgba(0, 0, 0, 0.3000)",
    "alphaNeutralDark_500": "rgba(0, 0, 0, 0.2000)",
    "alphaNeutralDark_400": "rgba(0, 0, 0, 0.1000)",
    "alphaNeutralDark_300": "rgba(0, 0, 0, 0.0500)"
      },
      blue: {
        100: "#e3e7ec",
        300: "#c1dbff",
        500: "#1575d2",
        900: "#151617"
      },
      text: {
        primary: "rgba(0, 0, 0, 0.9000)",
        secondary: "rgba(0, 0, 0, 0.7000)",
        tertiary: "rgba(0, 0, 0, 0.5500)",
        brand: {
          default: "#1575d2"
        },
        inverse: {
          primary: "rgba(255, 255, 255, 0.9000)",
          secondary: "rgba(255, 255, 255, 0.7000)",
          tertiary: "rgba(255, 255, 255, 0.5500)"
        }
      },
      bg: {
        primary: "#f6f6f6",
        brandSubtler: "#e3e7ec",
        brandSubtle: "#c1dbff",
        secondary: "#ffffff"
      },
      icon: {
        neutral: {
          active: "#101010",
          inactive: "rgba(0, 0, 0, 0.5500)"
        },
        primaryBrand: "#1575d2"
      },
      border: {
        inactive: "rgba(0, 0, 0, 0.1000)",
        active: "rgba(0, 0, 0, 0.9000)"
      }
    },
  },
}