const tc = require("..")
const equal = require("testmatrix").equal

const Equal = (actual, expected) => ({
  name: actual,
  assert: equal,
  actual,
  expected
})

const StyleTest = style =>
  Equal(
    tc[style](style),
    tc.Styles[style].open + style + tc.Styles[style].close
  )

const ChainTest = rightChain => style => {
  const chain = [style].concat(rightChain)
  const name = chain.join(" ")

  return Equal(
    chain.reduce((getter, i) => getter[i], tc)(name),
    chain.reduceRight(
      (name, i) =>
        (tc.Styles[i].open + name).replace(
          tc.Styles[i].old,
          tc.Styles[i].open
        ) + tc.Styles[i].close,
      name
    )
  )
}

exports.default = {
  "using styles": Object.keys(tc.Styles).map(StyleTest),
  "chaining styles": Object.keys(tc.Styles).map(
    ChainTest(["bold", "italic", "underline"])
  ),
  "nesting styles": [tc.Styles].map(
    ({ red, blue, cyan, bold, italic, inverse, underline }) =>
      Equal(
        tc.red(
          `Red ${tc.inverse("Inverse Red")} ${tc.blue.bold(
            `Blue ${tc.italic("Italic")} Bold`
          )} Red ${tc.cyan.inverse(
            `Inverse ${tc.underline("Underline")} Cyan`
          )} ${tc.italic("Italic")} Red`
        ),
        `${red.open}Red ${inverse.open}Inverse Red${inverse.close} ${
          blue.open
        }${bold.open}Blue ${italic.open}Italic${italic.close} Bold${
          bold.close
        }${red.open} Red ${cyan.open}${inverse.open}Inverse ${
          underline.open
        }Underline${underline.close} Cyan${inverse.close}${red.open} ${
          italic.open
        }Italic${italic.close} Red${red.close}`
      )
  ),
  "numbers & others": [new Date(), -1e10, -1, -0.1, 0, 0.1, 1, 1e10].map(n =>
    Equal(
      tc.inverse.bgYellow(n),
      tc.Styles.inverse.open +
        tc.Styles.bgYellow.open +
        n +
        tc.Styles.bgYellow.close +
        tc.Styles.inverse.close
    )
  ),
  "disable color support": [
    {
      assert: equal,
      actual: done => {
        tc.enabled = false
        done(tc.red.bold.inverse.dim.underline("No Color"), (tc.enabled = true))
      },
      expected: "No Color"
    }
  ]
}
