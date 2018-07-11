const { Clorox: x, STYLES } = require("../")
const test = require("tape")

test("styles", t => {
  Object.keys(STYLES).map(style => {
    const actual = x[style](style)
    const expected = `${STYLES[style].left}${style}${STYLES[style].right}`

    t.is(actual, expected, actual)
  })
  t.end()
})

test("chains", t => {
  const { red, bold, underline, italic } = STYLES
  const fixture = "Red, bold, underline and italic."
  const actual = x.red.bold.underline.italic(fixture)
  const expected = `${italic.left}${underline.left}${bold.left}${
    red.left
  }${fixture}${red.right}${bold.right}${underline.right}${italic.right}`

  t.is(actual, expected, actual)
  t.end()
})

test("nested", t => {
  const { red, blue, green, bold } = STYLES

  const actual = x.red(
    `Red ${x.blue.bold("Blue Bold")} Red ${x.green("Green")} Red`
  )
  const expected = `${red.left}Red ${bold.left}${blue.left}Blue Bold${
    red.left
  }${bold.right} Red ${green.left}Green${red.left} Red${red.right}`

  t.is(actual, expected, actual)
  t.end()
})
