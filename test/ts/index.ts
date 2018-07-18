import tc, { red, Styles } from "turbocolor"

console.log(
  tc.red("Hey!"),
  red("Ho!"),
  `${Styles.red.open}Let's go!${Styles.red.close}`
)
