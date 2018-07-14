const color = require("..")
const test = require("tape")

test("styles", t => {
  Object.keys(color.Styles).map(k => {
    const actual = color[k](k)
    const expected = `${color.Styles[k].open}${k}${color.Styles[k].close}`

    t.is(actual, expected, actual)
  })
  t.end()
})

test("numbers", t => {
  const actual = color.inverse.bgRed(1985)
  const expected = `${color.Styles.bgRed.open}${color.Styles.inverse.open}1985${
    color.Styles.inverse.close
  }${color.Styles.bgRed.close}`

  t.is(actual, expected, actual)

  t.end()
})

test("chains", t => {
  const { red, bold, underline, italic } = color.Styles
  const fixture = "Red, bold, underline and italic."
  const actual = color.red.bold.underline.italic(fixture)
  const expected = `${italic.open}${underline.open}${bold.open}${
    red.open
  }${fixture}${red.close}${bold.close}${underline.close}${italic.close}`

  t.is(actual, expected, actual)
  t.end()
})

test("nested", t => {
  const { red, blue, black, bold, inverse } = color.Styles
  const actual = color.red(
    `Red ${color.blue.bold("Bold Blue")} Red ${color.black.inverse(
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
  color.enabled = false
  t.is(color.red.bold.inverse.dim.underline("Ok"), "Ok")
  t.end()
})
