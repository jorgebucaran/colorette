const support =
  process.env.FORCE_COLOR ||
  process.platform === "win32" ||
  (process.stdout.isTTY &&
    process.env.TERM &&
    process.env.TERM !== "dumb")

const none = ansi => (support ? ansi : ["", ""])

module.exports = {
  reset: none(["\x1b[0m"]),
  newLine: ["\n", ""],
  tab: ["\t", ""],

  black: none(["\x1b[30m", "\x1b[39m"]),
  red: none(["\x1b[31m", "\x1b[39m"]),
  green: none(["\x1b[32m", "\x1b[39m"]),
  yellow: none(["\x1b[33m", "\x1b[39m"]),
  blue: none(["\x1b[34m", "\x1b[39m"]),
  magenta: none(["\x1b[35m", "\x1b[39m"]),
  cyan: none(["\x1b[36m", "\x1b[39m"]),
  white: none(["\x1b[37m", "\x1b[39m"]),
  gray: none(["\x1B[90m", "\x1b[39m"]),

  bgBlack: none(["\x1b[40m", "\x1b[49m"]),
  bgRed: none(["\x1b[41m", "\x1b[49m"]),
  bgGreen: none(["\x1b[42m", "\x1b[49m"]),
  bgYellow: none(["\x1b[43m", "\x1b[49m"]),
  bgBlue: none(["\x1b[44m", "\x1b[49m"]),
  bgMagenta: none(["\x1b[45m", "\x1b[49m"]),
  bgCyan: none(["\x1b[46m", "\x1b[49m"]),
  bgWhite: none(["\x1b[47m", "\x1b[49m"]),

  dim: none(["\x1b[2m", "\x1b[22m"]),
  bold: none(["\x1b[1m", "\x1b[22m"]),
  hidden: none(["\x1b[8m", "\x1b[28m"]),
  italic: none(["\x1b[3m", "\x1b[23m"]),
  underline: none(["\x1b[4m", "\x1b[24m"]),
  inverse: none(["\x1b[7m", "\x1b[27m"]),
  strikethrough: none(["\x1b[9m", "\x1b[29m"])
}
