module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.js", "./src/**/**/*.js"],
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    fill: (theme) => ({
      red: theme("colors.red.primary"),
    }),
    colors: {
      white: "#ffffff",
      blue: {
        medium: "#005c98",
      },
      black: {
        light: "#262626",
        faded: "#00000059",
      },
      gray: {
        base: "#616161",
        background: "#fafafa",
        primary: "#dbdbdb",
      },
      red: {
        primary: "#ed4956",
      },
    },
  },
  variants: {
    display: ["group-hover"],
  },
};
