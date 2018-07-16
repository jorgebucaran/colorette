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
  const actual = tc.inverse.bgRed(1985)
  const expected = `${tc.Styles.bgRed.open}${tc.Styles.inverse.open}1985${
    tc.Styles.inverse.close
  }${tc.Styles.bgRed.close}`

  t.is(actual, expected, actual)

  t.end()
})

test("chains", t => {
  const red = tc.Styles.red
  const bold = tc.Styles.bold
  const underline = tc.Styles.underline
  const italic = tc.Styles.italic
  const fixture = "Red, bold, underline and italic."
  const actual = tc.red.bold.underline.italic(fixture)
  const expected = `${italic.open}${underline.open}${bold.open}${
    red.open
  }${fixture}${red.close}${bold.close}${underline.close}${italic.close}`

  t.is(actual, expected, actual)
  t.end()
})

test("nested", t => {
  const red = tc.Styles.red
  const blue = tc.Styles.blue
  const black = tc.Styles.black
  const bold = tc.Styles.bold
  const inverse = tc.Styles.inverse
  const actual = tc.red(
    `Red ${tc.blue.bold("Bold Blue")} Red ${tc.black.inverse(
      "Inverse Black"
    )} Red`
  )
  const expected = `${red.open}Red ${bold.open}${blue.open}Bold Blue${
    red.open
  }${bold.close} Red ${inverse.open}${black.open}Inverse Black${red.open}${
    inverse.close
  } Red${red.close}`

  t.is(actual, expected, actual)
  t.end()
})

test("toggle", t => {
  tc.enabled = false
  t.is(tc.red.bold.inverse.dim.underline("Ok"), "Ok")
  t.end()
})
