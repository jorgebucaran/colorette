"use strict"

const tc = {}
const Styles = (tc.Styles = {})
tc.enabled =
  process.env.FORCE_COLOR ||
  process.platform === "win32" ||
  (process.stdout.isTTY && process.env.TERM && process.env.TERM !== "dumb")
const defineProp = Object.defineProperty

const style = (prop, open, close) => {
  defineProp(tc, prop, {
    get: () => {
      for (let p in Styles) {
        defineProp(fn, p, {
          get: () => (stack.push(Styles[p]), fn)
        })
      }
      delete tc[prop]
      return (tc[prop] = fn)
    },
    configurable: true
  })

  const fn = out => {
    if (tc.enabled) {
      let i
      for (out += ""; (i = stack.pop()) !== void 0; ) {
        out = (open = i.open) + out.replace(i.old, open) + i.close
      }
      stack[0] = style
    }
    return out
  }

  const style = (Styles[prop] = {
    open: "\x1b[" + open,
    close: "\x1b[" + close,
    old: new RegExp("\\x1b\\[" + close, "g")
  })

  const stack = (fn.stack = [style])
}

style("reset", "0m", "0m")
style("bold", "1m", "22m")
style("dim", "2m", "22m")
style("italic", "3m", "23m")
style("underline", "4m", "24m")
style("inverse", "7m", "27m")
style("hidden", "8m", "28m")
style("strikethrough", "9m", "29m")
style("black", "30m", "39m")
style("red", "31m", "39m")
style("green", "32m", "39m")
style("yellow", "33m", "39m")
style("blue", "34m", "39m")
style("magenta", "35m", "39m")
style("cyan", "36m", "39m")
style("white", "37m", "39m")
style("gray", "90m", "39m")
style("bgBlack", "40m", "49m")
style("bgRed", "101m", "49m")
style("bgGreen", "102m", "49m")
style("bgYellow", "103m", "49m")
style("bgBlue", "104m", "49m")
style("bgMagenta", "105m", "49m")
style("bgCyan", "106m", "49m")
style("bgWhite", "107m", "49m")

module.exports = tc
