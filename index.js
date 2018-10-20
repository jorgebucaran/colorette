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

const color = (code, offset, seq) =>
  init(
    `\x1b[${code + offset}${seq || ""}m`,
    `\x1b[${39 + offset}m`,
    new RegExp(`\\x1b\\[${39 + offset}m`, "g")
  )

module.exports = {
  options: Object.defineProperty({}, "enabled", {
    get: () => enabled,
    set: value => (enabled = value)
  }),

  // Effects
  reset: init("\x1b[0m", "\x1b[0m", /\x1b\[0m/g),
  bold: init("\x1b[1m", "\x1b[22m", /\x1b\[22m/g),
  dim: init("\x1b[2m", "\x1b[22m", /\x1b\[22m/g),
  italic: init("\x1b[3m", "\x1b[23m", /\x1b\[23m/g),
  underline: init("\x1b[4m", "\x1b[24m", /\x1b\[24m/g),
  inverse: init("\x1b[7m", "\x1b[27m", /\x1b\[27m/g),
  hidden: init("\x1b[8m", "\x1b[28m", /\x1b\[28m/g),
  strikethrough: init("\x1b[9m", "\x1b[29m", /\x1b\[29m/g),

  // Foreground Colors
  black: color(30, 0),
  red: color(31, 0),
  green: color(32, 0),
  yellow: color(33, 0),
  blue: color(34, 0),
  magenta: color(35, 0),
  cyan: color(36, 0),
  white: color(37, 0),
  gray: color(90, 0),

  // Background Colors
  bgBlack: color(30, 10),
  bgRed: color(31, 10),
  bgGreen: color(32, 10),
  bgYellow: color(33, 10),
  bgBlue: color(34, 10),
  bgMagenta: color(35, 10),
  bgCyan: color(36, 10),
  bgWhite: color(37, 10),
  bgGray: color(90, 10),

  // Bright Foreground Colors
  blackBright: color(90, 0),
  redBright: color(91, 0),
  greenBright: color(92, 0),
  yellowBright: color(93, 0),
  blueBright: color(94, 0),
  magentaBright: color(95, 0),
  cyanBright: color(96, 0),
  whiteBright: color(97, 0),

  // Bright Background Colors
  bgBlackBright: color(90, 10),
  bgRedBright: color(91, 10),
  bgGreenBright: color(92, 10),
  bgYellowBright: color(93, 10),
  bgBlueBright: color(94, 10),
  bgMagentaBright: color(95, 10),
  bgCyanBright: color(96, 10),
  bgWhiteBright: color(97, 10),

  // Color Generators
  rgb: (r, g, b, isBg) => color(38, isBg ? 10 : 0, `;2;${r};${g};${b}`),
  ansi256: (code, isBg) => color(38, isBg ? 10 : 0, `;5;${code}`),
  ansi16: (code, isBg) => color(code, isBg ? 10 : 0)
}
