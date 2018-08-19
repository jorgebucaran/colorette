const tc = require("..")
const equal = require("testmatrix").equal

const styleKeys = Object.keys(tc.Styles)

const EqualTest = (actual, expected) => ({
  name: actual,
  assert: equal,
  actual,
  expected
})

const ChainTest = styles => style => {
  const chain = [style].concat(styles)
  const name = chain.join(" ")

  return EqualTest(
    chain.reduce((getter, i) => getter[i], tc)(name),
    chain.reduce(
      (name, i) =>
        (tc.Styles[i].open + name).replace(tc.Styles[i].re, tc.Styles[i].open) +
        tc.Styles[i].close,
      name
    )
  )
}

const StyleTest = style =>
  EqualTest(
    tc[style](style),
    tc.Styles[style].open + style + tc.Styles[style].close
  )

exports.default = {
  "using styles": styleKeys.map(StyleTest),
  "chaining styles": styleKeys.map(ChainTest(["bold", "italic", "underline"])),
  "nesting styles": [
    EqualTest(
      tc.red(
        `Red ${tc.inverse("Inverse Red")} ${tc.blue.bold(
          `Blue ${tc.italic("Italic")} Bold`
        )} Red ${tc.cyan.inverse(
          `Inverse ${tc.underline("Underline")} Cyan`
        )} ${tc.italic("Italic")} Red`
      ),
      `${tc.Styles.red.open}Red ${tc.Styles.inverse.open}Inverse Red${
        tc.Styles.inverse.close
      } ${tc.Styles.bold.open}${tc.Styles.blue.open}Blue ${
        tc.Styles.italic.open
      }Italic${tc.Styles.italic.close} Bold${tc.Styles.red.open}${
        tc.Styles.bold.close
      } Red ${tc.Styles.inverse.open}${tc.Styles.cyan.open}Inverse ${
        tc.Styles.underline.open
      }Underline${tc.Styles.underline.close} Cyan${tc.Styles.red.open}${
        tc.Styles.inverse.close
      } ${tc.Styles.italic.open}Italic${tc.Styles.italic.close} Red${
        tc.Styles.red.close
      }`
    )
  ],
  "numbers & others": [new Date(), -1e10, -1, -0.1, 0, 0.1, 1, 1e10].map(n =>
    EqualTest(
      tc.inverse.bgYellow(n),
      tc.Styles.bgYellow.open +
        tc.Styles.inverse.open +
        n +
        tc.Styles.inverse.close +
        tc.Styles.bgYellow.close
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
