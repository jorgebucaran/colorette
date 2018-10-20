import {
  red,
  green,
  bold,
  ansi16,
  ansi256,
  rgb,
  options,
  Style
} from "colorette"

options.enabled = true

console.log(`
  Beets are ${red("red")},
  Cucumbers are ${green("green")},
  ${bold("Colorette!")}.
`)

