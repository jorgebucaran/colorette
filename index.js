"use strict"

const defineProperty = Object.defineProperty

const Style = (open, close) => ({
  open: `\x1b[${open}m`,
  close: `\x1b[${close}m`,
  strip: new RegExp(`\\x1b\\[${close}m`, "g")
})

const Styles = {
  reset: Style(0, 0),
  bold: Style(1, 22),
  dim: Style(2, 22),
  italic: Style(3, 23),
  underline: Style(4, 24),
  inverse: Style(7, 27),
  hidden: Style(8, 28),
  strikethrough: Style(9, 29),

  black: Style(30, 39), // Dark
  red: Style(91, 39),
  green: Style(92, 39),
  yellow: Style(93, 39),
  blue: Style(94, 39),
  magenta: Style(95, 39),
  cyan: Style(96, 39),
  white: Style(97, 39),
  gray: Style(90, 39),

  bgBlack: Style(40, 49), // Dark
  bgRed: Style(101, 49),
  bgGreen: Style(102, 49),
  bgYellow: Style(103, 49),
  bgBlue: Style(104, 49),
  bgMagenta: Style(105, 49),
  bgCyan: Style(106, 49),
  bgWhite: Style(107, 49)
}

const Turbocolor = {
  Styles,
  enabled: true,
  supportsColor:
    process.env.FORCE_COLOR ||
    process.platform === "win32" ||
    (process.stdout.isTTY && process.env.TERM && process.env.TERM !== "dumb")
}

const color = function (out) {
  if (!Turbocolor.enabled) return out

  let i, style
  const styles = this.styles
  const length = styles.length

  for (i = 0, out = out + ""; i < length; i++) {
    style = Styles[styles[i]]
    out = `${style.open}${out.replace(style.strip, style.open)}${style.close}`
  }

  return out
}

for (const style in Styles) {
  defineProperty(Turbocolor, style, {
    get() {
      if (this.styles === undefined) {
        const o = {}
        const f = color.bind(o)

        f.__proto__ = Turbocolor
        f.styles = o.styles = [style]

        return f
      }

      this.styles.push(style)
      return this
    }
  })
}

module.exports = Turbocolor
