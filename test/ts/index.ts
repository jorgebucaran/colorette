import { red, green, bold, options, Style } from "colorette"

options.enabled = true

console.log(`
  Beets are ${red("red")},
  Cucumbers are ${green("green")},
  ${bold("Colorette!")}.
`)
