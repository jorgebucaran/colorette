"use strict"

const tc = {
  enabled:
    process.env.FORCE_COLOR ||
    process.platform === "win32" ||
    (process.stdout.isTTY && process.env.TERM && process.env.TERM !== "dumb")
}
const Styles = (tc.Styles = {})
const defineProp = Object.defineProperty

const init = (style, open, close, re) => {
  let i,
    len = 1,
    seq = [(Styles[style] = { open, close, re })]

  const fn = s => {
    if (tc.enabled) {
      for (i = 0, s += ""; i < len; i++) {
        style = seq[i]
        s =
          (open = style.open) +
          (~s.indexOf((close = style.close), 4) // skip first \x1b[
            ? s.replace(style.re, open)
            : s) +
          close
      }
      len = 1
    }
    return s
  }

  defineProp(tc, style, {
    get: () => {
      for (let k in Styles)
        defineProp(fn, k, {
          get: () => ((seq[len++] = Styles[k]), fn)
        })
      delete tc[style]
      return (tc[style] = fn)
    },
    configurable: true
  })
}

init("reset", "\x1b[0m", "\x1b[0m", /\x1b\[0m/g)
init("bold", "\x1b[1m", "\x1b[22m", /\x1b\[22m/g)
init("dim", "\x1b[2m", "\x1b[22m", /\x1b\[22m/g)
init("italic", "\x1b[3m", "\x1b[23m", /\x1b\[23m/g)
init("underline", "\x1b[4m", "\x1b[24m", /\x1b\[24m/g)
init("inverse", "\x1b[7m", "\x1b[27m", /\x1b\[27m/g)
init("hidden", "\x1b[8m", "\x1b[28m", /\x1b\[28m/g)
init("strikethrough", "\x1b[9m", "\x1b[29m", /\x1b\[29m/g)
init("black", "\x1b[30m", "\x1b[39m", /\x1b\[39m/g)
init("red", "\x1b[31m", "\x1b[39m", /\x1b\[39m/g)
init("green", "\x1b[32m", "\x1b[39m", /\x1b\[39m/g)
init("yellow", "\x1b[33m", "\x1b[39m", /\x1b\[39m/g)
init("blue", "\x1b[34m", "\x1b[39m", /\x1b\[39m/g)
init("magenta", "\x1b[35m", "\x1b[39m", /\x1b\[39m/g)
init("cyan", "\x1b[36m", "\x1b[39m", /\x1b\[39m/g)
init("white", "\x1b[37m", "\x1b[39m", /\x1b\[39m/g)
init("gray", "\x1b[90m", "\x1b[39m", /\x1b\[39m/g)
init("bgBlack", "\x1b[40m", "\x1b[49m", /\x1b\[49m/g)
init("bgRed", "\x1b[41m", "\x1b[49m", /\x1b\[49m/g)
init("bgGreen", "\x1b[42m", "\x1b[49m", /\x1b\[49m/g)
init("bgYellow", "\x1b[43m", "\x1b[49m", /\x1b\[49m/g)
init("bgBlue", "\x1b[44m", "\x1b[49m", /\x1b\[49m/g)
init("bgMagenta", "\x1b[45m", "\x1b[49m", /\x1b\[49m/g)
init("bgCyan", "\x1b[46m", "\x1b[49m", /\x1b\[49m/g)
init("bgWhite", "\x1b[47m", "\x1b[49m", /\x1b\[49m/g)

module.exports = tc
