const { Clorox: x, STYLES } = require("../")
const test = require("tape")

test("styles", t => {
  Object.keys(STYLES).map(style => {
    const actual = x[style](style)
    const expected = `${STYLES[style].open}${style}${STYLES[style].close}`

    t.is(actual, expected, actual)
  })
  t.end()
})

test("chains", t => {
  const { red, bold, underline, italic } = STYLES
  const fixture = "Red, bold, underline and italic."
  const actual = x.red.bold.underline.italic(fixture)
  const expected = `${italic.open}${underline.open}${bold.open}${
    red.open
  }${fixture}${red.close}${bold.close}${underline.close}${italic.close}`

  t.is(actual, expected, actual)
  t.end()
})

test("nested", t => {
  const { red, blue, green, bold } = STYLES

  const actual = x.red(
    `Red ${x.blue.bold("Blue Bold")} Red ${x.green("Green")} Red`
  )
  const expected = `${red.open}Red ${bold.open}${blue.open}Blue Bold${
    red.open
  }${bold.close} Red ${green.open}Green${red.open} Red${red.close}`

  t.is(actual, expected, actual)
  t.end()
})
