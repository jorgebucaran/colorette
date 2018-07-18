import tc, { red, Styles } from "turbocolor"

console.log(
  tc.red.inverse.underline.bold("Hey!"),
  red.bgWhite.italic("Ho!"),
  `${Styles.red.open}Let's go!${Styles.red.close}`
)
