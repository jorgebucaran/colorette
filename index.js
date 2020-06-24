"use strict"

let enabled =
  !("NO_COLOR" in process.env) &&
  ("FORCE_COLOR" in process.env ||
    process.platform === "win32" ||
    (process.stdout != null &&
      process.stdout.isTTY &&
      process.env.TERM &&
      process.env.TERM !== "dumb"))

const raw = (open, close, searchRegex, replaceValue) => (s) =>
  enabled
    ? open +
      (~(s += "").indexOf(close, 4) // skip opening \x1b[
        ? s.replace(searchRegex, replaceValue)
        : s) +
      close
    : s

const init = (open, close) => {
  return raw(
    `\x1b[${open}m`,
    `\x1b[${close}m`,
    new RegExp(`\\x1b\\[${close}m`, "g"),
    `\x1b[${open}m`
  )
}

const options = Object.defineProperty({}, "enabled", {
  get: () => enabled,
  set: (value) => (enabled = value),
})
const reset = init(0, 0)
const bold = raw("\x1b[1m", "\x1b[22m", /\x1b\[22m/g, "\x1b[22m\x1b[1m")
const dim = raw("\x1b[2m", "\x1b[22m", /\x1b\[22m/g, "\x1b[22m\x1b[2m")
const italic = init(3, 23)
const underline = init(4, 24)
const inverse = init(7, 27)
const hidden = init(8, 28)
const strikethrough = init(9, 29)
const black = init(30, 39)
const red = init(31, 39)
const green = init(32, 39)
const yellow = init(33, 39)
const blue = init(34, 39)
const magenta = init(35, 39)
const cyan = init(36, 39)
const white = init(37, 39)
const gray = init(90, 39)
const bgBlack = init(40, 49)
const bgRed = init(41, 49)
const bgGreen = init(42, 49)
const bgYellow = init(43, 49)
const bgBlue = init(44, 49)
const bgMagenta = init(45, 49)
const bgCyan = init(46, 49)
const bgWhite = init(47, 49)
const blackBright = init(90, 39)
const redBright = init(91, 39)
const greenBright = init(92, 39)
const yellowBright = init(93, 39)
const blueBright = init(94, 39)
const magentaBright = init(95, 39)
const cyanBright = init(96, 39)
const whiteBright = init(97, 39)
const bgBlackBright = init(100, 49)
const bgRedBright = init(101, 49)
const bgGreenBright = init(102, 49)
const bgYellowBright = init(103, 49)
const bgBlueBright = init(104, 49)
const bgMagentaBright = init(105, 49)
const bgCyanBright = init(106, 49)
const bgWhiteBright = init(107, 49)

module.exports = {
  options,
  reset,
  bold,
  dim,
  italic,
  underline,
  inverse,
  hidden,
  strikethrough,
  black,
  red,
  green,
  yellow,
  blue,
  magenta,
  cyan,
  white,
  gray,
  bgBlack,
  bgRed,
  bgGreen,
  bgYellow,
  bgBlue,
  bgMagenta,
  bgCyan,
  bgWhite,
  blackBright,
  redBright,
  greenBright,
  yellowBright,
  blueBright,
  magentaBright,
  cyanBright,
  whiteBright,
  bgBlackBright,
  bgRedBright,
  bgGreenBright,
  bgYellowBright,
  bgBlueBright,
  bgMagentaBright,
  bgCyanBright,
  bgWhiteBright,
}
