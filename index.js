"use strict"

const env = process.env
const has256 =
  env.TERM_PROGRAM === "Apple_Terminal" || /-256(color)?$/i.test(env.TERM)
const has16m =
  env.COLORTERM === "truecolor" ||
  (env.TERM_PROGRAM === "iTerm.app" && /^3/.test(env.TERM_PROGRAM_VERSION))

let enabled = env.FORCE_COLOR || process.stdout.isTTY

const sgrToWrapFn = (open, close, searchRegex, replaceValue) => s =>
  enabled
    ? open +
      (~(s += "").indexOf(close, 4) // skip opening \x1b[
        ? s.replace(searchRegex, replaceValue + open)
        : s) +
      close
    : s

const init = (open, close, offset, appendix, replaceValue) =>
  sgrToWrapFn(
    `\x1b[${open + ~~offset + (appendix || "")}m`,
    `\x1b[${close + ~~offset}m`,
    new RegExp(`\\x1b\\[${close + ~~offset}m`, "g"),
    replaceValue || ""
  )

const hexToRgb = code =>
  (i => [(i >> 16) & 255, (i >> 8) & 255, i & 255])(
    parseInt(code[0] === "#" ? code.slice(1) : code, 16)
  )

const rgbToAnsi16 = (r, g, b) =>
  (r > 128 || g > 128 || b > 128 ? 90 : 30) +
  (r === g && r === b && r > 128 && r < 192
    ? 0
    : ~~(r / 255 + 0.5) | (~~(g / 255 + 0.5) << 1) | (~~(b / 255 + 0.5) << 2))

const rgbToAnsi256 = (r, g, b) =>
  r === g && r === b
    ? r < 8
      ? 16 // Black
      : r > 248
        ? 231 // White
        : 232 + ~~(((r - 8) / 247) * 25 + 0.5) // Grays
    : 16 +
      ~~((r / 255) * 5 + 0.5) * 36 +
      ~~((g / 255) * 5 + 0.5) * 6 +
      ~~((b / 255) * 5 + 0.5)

const rgb = offset => (r, g, b) =>
  has16m
    ? init(38, 39, offset, `;2;${r};${g};${b}`)
    : has256
      ? init(38, 39, offset, `;5;${rgbToAnsi256(r, g, b)}`)
      : init(rgbToAnsi16(r, g, b), 39, offset)

const hex = offset => code =>
  rgb(offset)((code = hexToRgb(code))[0], code[1], code[2])

module.exports = {
  options: Object.defineProperty({}, "enabled", {
    get: () => enabled,
    set: value => (enabled = value)
  }),
  rgb: rgb(0),
  bgRgb: rgb(10),
  hex: hex(0),
  bgHex: hex(10),
  reset: init(0, 0),
  bold: init(1, 22, 0, "", "\x1b[22m"),
  dim: init(2, 22, 0, "", "\x1b[22m"),
  italic: init(3, 23),
  underline: init(4, 24),
  inverse: init(7, 27),
  hidden: init(8, 28),
  strikethrough: init(9, 29),
  black: init(30, 39),
  red: init(31, 39),
  green: init(32, 39),
  yellow: init(33, 39),
  blue: init(34, 39),
  magenta: init(35, 39),
  cyan: init(36, 39),
  white: init(37, 39),
  gray: init(90, 39),
  bgBlack: init(40, 49),
  bgRed: init(41, 49),
  bgGreen: init(42, 49),
  bgYellow: init(43, 49),
  bgBlue: init(44, 49),
  bgMagenta: init(45, 49),
  bgCyan: init(46, 49),
  bgWhite: init(47, 49),
  blackBright: init(90, 39),
  redBright: init(91, 39),
  greenBright: init(92, 39),
  yellowBright: init(93, 39),
  blueBright: init(94, 39),
  magentaBright: init(95, 39),
  cyanBright: init(96, 39),
  whiteBright: init(97, 39),
  bgBlackBright: init(100, 49),
  bgRedBright: init(101, 49),
  bgGreenBright: init(102, 49),
  bgYellowBright: init(103, 49),
  bgBlueBright: init(104, 49),
  bgMagentaBright: init(105, 49),
  bgCyanBright: init(106, 49),
  bgWhiteBright: init(107, 49)
}
