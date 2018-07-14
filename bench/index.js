const { Suite } = require("benchmark")

console.log(`# Load Time`)

console.time("chalk")
const chalk = require("chalk")
console.timeEnd("chalk")

console.time("ansi-colors")
const ansi = require("ansi-colors")
console.timeEnd("ansi-colors")

console.time("kleur")
const kleur = require("kleur")
console.timeEnd("kleur")

console.time("turbocolor")
const { color } = require("..")
console.timeEnd("turbocolor")

const bench = name => (
  console.log(`\n# ${name}`),
  new Suite().on("cycle", ({ target: { name, hz } }) =>
    console.log(`${name} × ${Math.floor(hz).toLocaleString()} ops/sec`)
  )
)

const fixture = lib =>
  lib.red(
    `A red ${lib.white("red")} red ${lib.red("red")} red ${lib.gray(
      "red"
    )} red ${lib.red("red")} red ${lib.red("red")} red ${lib.red(
      "red"
    )} red ${lib.red("red")} red ${lib.red("red")} red ${lib.blue(
      "red"
    )} red ${lib.red("red")} red ${lib.red("red")} red ${lib.red(
      "red"
    )} red ${lib.red("red")}red ${lib.red("red")} red ${lib.red(
      "red"
    )} red ${lib.red("red")} red ${lib.red("red")} red ${lib.red(
      "red"
    )} red ${lib.red("red")} red ${lib.red("red")} red ${lib.red(
      "red"
    )} red ${lib.red("red")} red ${lib.red("red")} red ${lib.red(
      "red"
    )} red ${lib.red("red")} red ${lib.red("red")}red ${lib.green(
      "red"
    )} red ${lib.red("red")} red ${lib.red("red")} red ${lib.red(
      "red"
    )} red ${lib.red("red")} red ${lib.red("red")} red ${lib.red(
      "red"
    )} red ${lib.red("red")} red ${lib.red("red")} red ${lib.red(
      "red"
    )} red ${lib.red("red")} red ${lib.magenta("red")} red ${lib.red(
      "red"
    )}red ${lib.red("red")} red ${lib.cyan("red")} red ${lib.red(
      "red"
    )} red ${lib.red("red")} red ${lib.yellow("red")} red ${lib.red(
      "red"
    )} red ${lib.red("red")} red ${lib.red("red")} red ${lib.red(
      "red"
    )} red ${lib.red("red")} red ${lib.red("red")} red ${lib.red(
      "red"
    )} message.`
  )

const keys = Object.keys(require("..").STYLES)

bench("All Colors")
  .add("chalk", () => keys.map(k => chalk[k]("foo")))
  .add("ansi-colors", () => keys.map(k => ansi[k]("foo")))
  .add("kleur", () => keys.map(k => kleur[k]("foo")))
  .add("turbocolor", () => keys.map(k => color[k]("foo")))
  .run()

bench("Chained Colors")
  .add("chalk", () => keys.map(k => chalk[k].bold.dim.italic("foo")))
  .add("ansi-colors", () => keys.map(k => ansi[k].bold.dim.italic("foo")))
  .add("kleur", () => keys.map(k => kleur[k].bold.dim.italic("foo")))
  .add("turbocolor", () => keys.map(k => color[k].bold.dim.italic("foo")))
  .run()

bench("Nested Colors")
  .add("chalk", () => fixture(chalk))
  .add("ansi-colors", () => fixture(ansi))
  .add("kleur", () => fixture(kleur))
  .add("turbocolor", () => fixture(color))
  .run()
