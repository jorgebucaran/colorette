import * as colorette from "../index.js"

import bench from "benchmark"
import chalk from "chalk"
import kleur from "kleur"
import colors from "colors"
import picocolors from "picocolors"
import ansicolors from "ansi-colors"

const test = (c) =>
  c.red(`${c.bold(`${c.cyan(`${c.yellow("yellow")}cyan`)}`)}red`)

new bench.Suite()
  .add("  chalk       ", () => test(chalk))
  .add("  kleur       ", () => test(kleur))
  .add("  colors      ", () => test(colors))
  .add("  ansi-colors ", () => test(ansicolors))
  .add("  picocolors  ", () => test(picocolors))
  .add("+ colorette   ", () => test(colorette))
  .on("cycle", ({ target: { name, hz } }) =>
    console.log(name, `${Math.floor(hz).toLocaleString()} ops/sec`.padStart(18))
  )
  .run()
