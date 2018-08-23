const Suite = require("benchmark").Suite

exports.runBenchmark = (tests, modules) =>
  Object.keys(tests).map((name, i) => {
    console.log(`${i > 0 ? "\n" : ""}${name}`)
    Object.keys(modules)
      .reduce(
        (bench, id) => bench.add(id, tests[name].bind({}, modules[id], id)),
        new Suite().on("cycle", ({ target: { name, hz } }) =>
          console.log(`${name} × ${Math.floor(hz).toLocaleString()} ops/sec`)
        )
      )
      .run()
  })
