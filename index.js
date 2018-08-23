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

module.exports = {
  options: Object.defineProperty({}, "enabled", {
    get: () => enabled,
    set: value => (enabled = value)
  }),
  reset: init("\x1b[0m", "\x1b[0m", /\x1b\[0m/g),
  bold: init("\x1b[1m", "\x1b[22m", /\x1b\[22m/g),
  dim: init("\x1b[2m", "\x1b[22m", /\x1b\[22m/g),
  italic: init("\x1b[3m", "\x1b[23m", /\x1b\[23m/g),
  underline: init("\x1b[4m", "\x1b[24m", /\x1b\[24m/g),
  inverse: init("\x1b[7m", "\x1b[27m", /\x1b\[27m/g),
  hidden: init("\x1b[8m", "\x1b[28m", /\x1b\[28m/g),
  strikethrough: init("\x1b[9m", "\x1b[29m", /\x1b\[29m/g),
  black: init("\x1b[30m", "\x1b[39m", /\x1b\[39m/g),
  red: init("\x1b[31m", "\x1b[39m", /\x1b\[39m/g),
  green: init("\x1b[32m", "\x1b[39m", /\x1b\[39m/g),
  yellow: init("\x1b[33m", "\x1b[39m", /\x1b\[39m/g),
  blue: init("\x1b[34m", "\x1b[39m", /\x1b\[39m/g),
  magenta: init("\x1b[35m", "\x1b[39m", /\x1b\[39m/g),
  cyan: init("\x1b[36m", "\x1b[39m", /\x1b\[39m/g),
  white: init("\x1b[37m", "\x1b[39m", /\x1b\[39m/g),
  gray: init("\x1b[90m", "\x1b[39m", /\x1b\[39m/g),
  bgBlack: init("\x1b[40m", "\x1b[49m", /\x1b\[49m/g),
  bgRed: init("\x1b[41m", "\x1b[49m", /\x1b\[49m/g),
  bgGreen: init("\x1b[42m", "\x1b[49m", /\x1b\[49m/g),
  bgYellow: init("\x1b[43m", "\x1b[49m", /\x1b\[49m/g),
  bgBlue: init("\x1b[44m", "\x1b[49m", /\x1b\[49m/g),
  bgMagenta: init("\x1b[45m", "\x1b[49m", /\x1b\[49m/g),
  bgCyan: init("\x1b[46m", "\x1b[49m", /\x1b\[49m/g),
  bgWhite: init("\x1b[47m", "\x1b[49m", /\x1b\[49m/g),
  blackBright: init("\x1b[90m", "\x1b[39m", /\x1b\[39/g),
  redBright: init("\x1b[91m", "\x1b[39m", /\x1b\[39/g),
  greenBright: init("\x1b[92m", "\x1b[39m", /\x1b\[39/g),
  yellowBright: init("\x1b[93m", "\x1b[39m", /\x1b\[39/g),
  blueBright: init("\x1b[94m", "\x1b[39m", /\x1b\[39/g),
  magentaBright: init("\x1b[95m", "\x1b[39m", /\x1b\[39/g),
  cyanBright: init("\x1b[96m", "\x1b[39m", /\x1b\[39/g),
  whiteBright: init("\x1b[97m", "\x1b[39m", /\x1b\[39/g),
  bgBlackBright: init("\x1b[100m", "\x1b[49m", /\x1b\[49/g),
  bgRedBright: init("\x1b[101m", "\x1b[49m", /\x1b\[49/g),
  bgGreenBright: init("\x1b[102m", "\x1b[49m", /\x1b\[49/g),
  bgYellowBright: init("\x1b[103m", "\x1b[49m", /\x1b\[49/g),
  bgBlueBright: init("\x1b[104m", "\x1b[49m", /\x1b\[49/g),
  bgMagentaBright: init("\x1b[105m", "\x1b[49m", /\x1b\[49/g),
  bgCyanBright: init("\x1b[106m", "\x1b[49m", /\x1b\[49/g),
  bgWhiteBright: init("\x1b[107m", "\x1b[49m", /\x1b\[49/g)
}
