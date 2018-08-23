const styles = [
  "reset",
  "bold",
  "dim",
  "italic",
  "underline",
  "inverse",
  "hidden",
  "strikethrough",
  "black",
  "red",
  "green",
  "yellow",
  "blue",
  "magenta",
  "cyan",
  "white",
  "gray",
  "bgBlack",
  "bgRed",
  "bgGreen",
  "bgYellow",
  "bgBlue",
  "bgMagenta",
  "bgCyan",
  "bgWhite"
]
const { runBenchmark } = require("./runBenchmark")

runBenchmark(
  {
    "# Using Styles": c => styles.map(k => c[k](k)),
    "# Combining Styles": (c, id) =>
      styles.map(
        k =>
          id === "colorette"
            ? c.bold(c.underline(c.italic(c[k](k))))
            : c.bold.underline.italic[k](k)
      ),
    "# Nesting Styles": ({
      red,
      blue,
      cyan,
      white,
      green,
      yellow,
      magenta,
      bold,
      italic,
      underline
    }) =>
      green(
        `GREEN, ${blue(
          `BLUE, ${bold(
            `BOLD AND ${yellow("YELLOW")}. BACK TO BLUE, ${underline(
              `UNDERLINE,`
            )}`
          )} MORE BLUE, ${magenta(
            `MAGENTA, ${white("WHITE,")}${cyan(
              ` CYAN, ${italic(`ITALIC ${bold("BOLD")} ITALIC`)}, CYAN,`
            )} MAGENTA,`
          )} BLUE`
        )} AND BACK TO GREEN.`
      )
  },
  {
    chalk: require("chalk"),
    "ansi-colors": require("ansi-colors"),
    colorette: require("..")
  }
)
