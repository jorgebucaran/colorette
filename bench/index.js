const { runBenchmark } = require("./runBenchmark")

const chalk = require("chalk")
const kleur = require("kleur")
const color = require("ansi-colors")
const tc = require("..")

const styleKeys = Object.keys(tc.Styles)

runBenchmark(
  {
    "# Using Styles": c => styleKeys.map(k => c[k](k)),
    "# Chaining Styles": c => styleKeys.map(k => c[k].italic.underline.bold(k)),
    "# Nesting Styles": ({
      red,
      cyan,
      green,
      blue,
      bold,
      magenta,
      white,
      bgBlue,
      yellow
    }) =>
      green(
        `GREEN, ${blue(
          `BLUE, ${bold(
            `BOLD AND ${green("GREEN")}. BACK TO BLUE, ${red.italic.underline(
              `RED ITALIC UNDERLINE,`
            )}`
          )} MORE BLUE, ${magenta(
            `MAGENTA, ${white.inverse("INVERSE WHITE,")}${cyan(
              ` CYAN, ${bgBlue.black(
                `BLACK ON BLUE, ${yellow.bold.inverse(
                  "BLUE ON BOLD YELLOW"
                )}, BLACK ON BLUE`
              )}, CYAN,`
            )} MAGENTA,`
          )} BLUE`
        )} AND BACK TO GREEN.`
      )
  },
  {
    chalk,
    kleur,
    "ansi-colors": color,
    turbocolor: tc
  }
)
