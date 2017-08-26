module.exports = (strip => ({
  reset: strip(["\x1b[0m"]),
  newLine: ["\n", ""],
  tab: ["\t", ""],

  black: strip(["\x1b[30m", "\x1b[39m"]),
  red: strip(["\x1b[31m", "\x1b[39m"]),
  green: strip(["\x1b[32m", "\x1b[39m"]),
  yellow: strip(["\x1b[33m", "\x1b[39m"]),
  blue: strip(["\x1b[34m", "\x1b[39m"]),
  magenta: strip(["\x1b[35m", "\x1b[39m"]),
  cyan: strip(["\x1b[36m", "\x1b[39m"]),
  white: strip(["\x1b[37m", "\x1b[39m"]),
  gray: strip(["\x1B[90m", "\x1b[39m"]),

  bgBlack: strip(["\x1b[40m", "\x1b[49m"]),
  bgRed: strip(["\x1b[41m", "\x1b[49m"]),
  bgGreen: strip(["\x1b[42m", "\x1b[49m"]),
  bgYellow: strip(["\x1b[43m", "\x1b[49m"]),
  bgBlue: strip(["\x1b[44m", "\x1b[49m"]),
  bgMagenta: strip(["\x1b[45m", "\x1b[49m"]),
  bgCyan: strip(["\x1b[46m", "\x1b[49m"]),
  bgWhite: strip(["\x1b[47m", "\x1b[49m"]),

  dim: strip(["\x1b[2m", "\x1b[22m"]),
  bold: strip(["\x1b[1m", "\x1b[22m"]),
  hidden: strip(["\x1b[8m", "\x1b[28m"]),
  italic: strip(["\x1b[3m", "\x1b[23m"]),
  underline: strip(["\x1b[4m", "\x1b[24m"]),
  inverse: strip(["\x1b[7m", "\x1b[27m"]),
  strikethrough: strip(["\x1b[9m", "\x1b[29m"])
}))(
  ansi =>
    process.env.FORCE_COLOR ||
    process.platform === "win32" ||
    (process.stdout.isTTY && process.env.TERM && process.env.TERM !== "dumb")
      ? ansi
      : ["", ""]
)
