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
    "# Combining Styles": ({ red, bgWhite, bold, underline, italic }, id) =>
      id === "colorette"
        ? red(bgWhite(bold(underline(italic("Engage!")))))
        : red.bgWhite.bold.underline.italic("Engage!"),
    "# Nesting Styles": ({
      red,
      blue,
      cyan,
      white,
      yellow,
      magenta,
      bold,
      italic,
      underline
    }) =>
      red(
        `RED, ${blue(
          `BLUE, ${bold(
            `BOLD AND ${yellow("YELLOW")}. BACK TO BLUE, ${underline(
              `UNDERLINE,`
            )}`
          )} MORE BLUE, ${magenta(
            `MAGENTA, ${white("WHITE,")}${cyan(
              ` CYAN, ${italic(`ITALIC ${bold("BOLD")} ITALIC`)}, CYAN,`
            )} MAGENTA,`
          )} BLUE`
        )} AND BACK TO RED.`
      )
  },
  {
    chalk: require("chalk"),
    kleur: require("kleur"),
    "ansi-colors": require("ansi-colors"),
    colorette: require("..")
  }
)
