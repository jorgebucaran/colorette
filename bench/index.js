const Suite = require("benchmark").Suite

const runBenchmark = (test, modules) =>
  Object.keys(modules)
    .reduce(
      (bench, id) => bench.add(id, test.bind({}, modules[id])),
      new Suite().on("cycle", ({ target: { name, hz } }) =>
        console.log(`${name} × ${Math.floor(hz).toLocaleString()} ops/sec`)
      )
    )
    .run()

runBenchmark(
  (c) =>
    c.red(
      `${"X"}${c.blue(
        `${"X"}${c.bold(
          `${"X"}${c.yellow("X")}${"X"}${c.underline("X")}`
        )}${"X"}${c.magenta(`${"X"}${c.white("X")}${c.cyan("X")}${"X"}`)}${"X"}`
      )}${"X"}`
    ),
  {
    colorette: require(".."),
    chalk: require("chalk"),
    kleur: require("kleur"),
    colors: require("colors"),
    "ansi-colors": require("ansi-colors"),
  }
)
