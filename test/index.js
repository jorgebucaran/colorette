const tc = require("..")
const test = require("tape")

test("styles", t => {
  Object.keys(tc.Styles).map(k => {
    const actual = tc[k](k)
    const expected = `${tc.Styles[k].open}${k}${tc.Styles[k].close}`

    t.is(actual, expected, actual)
  })
  t.end()
})

test("numbers", t => {
  const actual = tc.inverse.bgYellow(Math.PI)
  const expected =
    tc.Styles.inverse.open +
    tc.Styles.bgYellow.open +
    Math.PI +
    tc.Styles.bgYellow.close +
    tc.Styles.inverse.close

  t.is(actual, expected, actual)

  t.end()
})

test("chains", t => {
  const red = tc.Styles.red
  const bold = tc.Styles.bold
  const italic = tc.Styles.italic
  const inverse = tc.Styles.inverse
  const underline = tc.Styles.underline

  const fixture = "Red, bold, italic, inverse & underline."
  const actual = tc.red.bold.italic.inverse.underline(fixture)
  const expected =
    red.open +
    bold.open +
    italic.open +
    inverse.open +
    underline.open +
    fixture +
    underline.close +
    inverse.close +
    italic.close +
    bold.close +
    red.close

  t.is(actual, expected, actual)
  t.end()
})

test("nested", t => {
  const red = tc.Styles.red
  const blue = tc.Styles.blue
  const cyan = tc.Styles.cyan
  const bold = tc.Styles.bold
  const italic = tc.Styles.italic
  const inverse = tc.Styles.inverse
  const underline = tc.Styles.underline

  const actual = tc.red(
    `Red ${tc.inverse("Inverse Red")} ${tc.blue.bold(
      `Blue ${tc.italic("Italic")} Bold`
    )} Red ${tc.cyan.inverse(
      `Inverse ${tc.underline("Underline")} Cyan`
    )} ${tc.italic("Italic")} Red`
  )

  const expected = `${red.open}Red ${inverse.open}Inverse Red${inverse.close} ${
    blue.open
  }${bold.open}Blue ${italic.open}Italic${italic.close} Bold${bold.close}${
    red.open
  } Red ${cyan.open}${inverse.open}Inverse ${underline.open}Underline${
    underline.close
  } Cyan${inverse.close}${red.open} ${italic.open}Italic${italic.close} Red${
    red.close
  }`

  t.is(actual, expected, actual)
  t.end()
})

test("toggle", t => {
  tc.enabled = false
  t.is(tc.red.bold.inverse.dim.underline("Ok"), "Ok")
  t.end()
})
