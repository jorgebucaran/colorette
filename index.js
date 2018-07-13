const EMPTY_REGEX = /(?:)/
const NO_STYLE = { open: "", close: "", strip: EMPTY_REGEX }

const isColorSupported =
  process.env.FORCE_COLOR ||
  process.platform === "win32" ||
  (process.stdout.isTTY && process.env.TERM && process.env.TERM !== "dumb")

const Style = (open, close) =>
  isColorSupported
    ? {
        open: `\x1b[${open}m`,
        close: `\x1b[${close}m`,
        strip: new RegExp(`\\x1b\\[${close}m`, "g")
      }
    : NO_STYLE

const STYLES = {
  black: Style(30, 39),
  red: Style(31, 39),
  green: Style(32, 39),
  yellow: Style(33, 39),
  blue: Style(34, 39),
  magenta: Style(35, 39),
  cyan: Style(36, 39),
  white: Style(37, 39),
  gray: Style(90, 39),
  bgBlack: Style(40, 49),
  bgRed: Style(41, 49),
  bgGreen: Style(42, 49),
  bgYellow: Style(43, 49),
  bgBlue: Style(44, 49),
  bgMagenta: Style(45, 49),
  bgCyan: Style(46, 49),
  bgWhite: Style(47, 49),
  reset: Style(0, 0),
  bold: Style(1, 22),
  dim: Style(2, 22),
  italic: Style(3, 23),
  underline: Style(4, 24),
  inverse: Style(7, 27),
  hidden: Style(8, 28),
  strikethrough: Style(9, 29)
}

const Clorox = function(s) {
  let i, style
  const styles = this.styles
  const length = styles.length

  for (i = 0, s = s + ""; i < length; i++) {
    style = STYLES[styles[i]]
    s = `${style.open}${s.replace(style.strip, style.open)}${style.close}`
  }

  return s
}

const defineProperty = Object.defineProperty

for (const style in STYLES) {
  defineProperty(Clorox, style, {
    get() {
      if (this.styles === undefined) {
        const o = {}
        const f = Clorox.bind(o)

        f.__proto__ = Clorox
        f.styles = o.styles = [style]

        return f
      }

      this.styles.push(style)
      return this
    }
  })
}

module.exports = { Clorox, STYLES }
