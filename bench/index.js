const { Suite } = require("benchmark")

console.log("# Load Time")

console.time("chalk")
const chalk = require("chalk")
console.timeEnd("chalk")

console.time("kleur")
const kleur = require("kleur")
console.timeEnd("kleur")

console.time("ansi-colors")
const ansi = require("ansi-colors")
console.timeEnd("ansi-colors")

console.time("turbocolor")
const turbocolor = require("..")
console.timeEnd("turbocolor")

const styles = Object.keys(turbocolor.Styles)

const bench = ({ testables, tests }) =>
  Object.keys(tests)
    .map(name => ({
      name,
      test: Object.keys(testables).reduce(
        (bench, id) => bench.add(id, tests[name].bind({}, testables[id])),
        new Suite().on("cycle", ({ target: { name, hz } }) =>
          console.log(`${name} × ${Math.floor(hz).toLocaleString()} ops/sec`)
        )
      )
    }))
    .map(({ name, test }) => (console.log(`\n# ${name}`), test.run()))

bench({
  testables: {
    chalk,
    kleur,
    "ansi-colors": ansi,
    turbocolor
  },
  tests: {
    "Using Styles": c => styles.map(k => c[k]("foo")),
    "Chaining Styles": c => styles.map(k => c[k].italic.underline.bold("bar")),
    "Nesting Styles": ({
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
  }
})
