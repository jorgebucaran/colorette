"use strict"

let enabled =
  process.env.FORCE_COLOR ||
  process.platform === "win32" ||
  (process.stdout.isTTY && process.env.TERM && process.env.TERM !== "dumb")

const init = (open, close, re) => s =>
  enabled
    ? open +
      (~(s += "").indexOf(close, 4) // skip opening \x1b[
        ? s.replace(re, open)
        : s) +
      close
    : s

const ansi = (open, close, offset, seq) =>
  init(
    `\x1b[${open + (offset = offset == null ? 0 : offset)}${seq || ""}m`,
    `\x1b[${close + offset}m`,
    new RegExp(`\\x1b\\[${close + offset}m`, "g")
  )

module.exports = {
  options: Object.defineProperty({}, "enabled", {
    get: () => enabled,
    set: value => (enabled = value)
  }),

  // Effects
  reset: ansi(0, 0),
  bold: ansi(1, 22),
  dim: ansi(2, 22),
  italic: ansi(3, 23),
  underline: ansi(4, 24),
  inverse: ansi(7, 27),
  hidden: ansi(8, 28),
  strikethrough: ansi(9, 29),

  // Foreground Colors
  black: ansi(30, 39),
  red: ansi(31, 39),
  green: ansi(32, 39),
  yellow: ansi(33, 39),
  blue: ansi(34, 39),
  magenta: ansi(35, 39),
  cyan: ansi(36, 39),
  white: ansi(37, 39),
  gray: ansi(90, 39),

  // Background Colors
  bgBlack: ansi(40, 49),
  bgRed: ansi(41, 49),
  bgGreen: ansi(42, 49),
  bgYellow: ansi(43, 49),
  bgBlue: ansi(44, 49),
  bgMagenta: ansi(45, 49),
  bgCyan: ansi(46, 49),
  bgWhite: ansi(47, 49),

  // Bright Foreground Colors
  blackBright: ansi(90, 39),
  redBright: ansi(91, 39),
  greenBright: ansi(92, 39),
  yellowBright: ansi(93, 39),
  blueBright: ansi(94, 39),
  magentaBright: ansi(95, 39),
  cyanBright: ansi(96, 39),
  whiteBright: ansi(97, 39),

  // Bright Background Colors
  bgBlackBright: ansi(100, 49),
  bgRedBright: ansi(101, 49),
  bgGreenBright: ansi(102, 49),
  bgYellowBright: ansi(103, 49),
  bgBlueBright: ansi(104, 49),
  bgMagentaBright: ansi(105, 49),
  bgCyanBright: ansi(106, 49),
  bgWhiteBright: ansi(107, 49),

  // Color Generators
  rgb: (r, g, b, isBg) => ansi(38, 39, isBg ? 10 : 0, `;2;${r};${g};${b}`),
  ansi256: (code, isBg) => ansi(38, 39, isBg ? 10 : 0, `;5;${code}`),
  ansi16: (code, isBg) => ansi(code, 39, isBg ? 10 : 0)
}
