const { color, STYLES } = require("../")
const test = require("tape")

test("styles", t => {
  Object.keys(STYLES).map(style => {
    const actual = color[style](style)
    const expected = `${STYLES[style].open}${style}${STYLES[style].close}`

    t.is(actual, expected, actual)
  })
  t.end()
})

test("numbers", t => {
  const actual = color.inverse.bgRed(1985)
  const expected = `${STYLES.bgRed.open}${STYLES.inverse.open}1985${
    STYLES.inverse.close
  }${STYLES.bgRed.close}`

  t.is(actual, expected, actual)

  t.end()
})

test("chains", t => {
  const { red, bold, underline, italic } = STYLES
  const fixture = "Red, bold, underline and italic."
  const actual = color.red.bold.underline.italic(fixture)
  const expected = `${italic.open}${underline.open}${bold.open}${
    red.open
  }${fixture}${red.close}${bold.close}${underline.close}${italic.close}`

  t.is(actual, expected, actual)
  t.end()
})

test("nested", t => {
  const { red, blue, black, bold, inverse } = STYLES

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
