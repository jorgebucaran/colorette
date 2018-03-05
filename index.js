const ansi = require("./ansi")

module.exports = (function Clorox(old, close) {
  const clorox = s => Clorox(clorox.toString(s))

  clorox.toString = s => old + (s || "") + (close || ansi.reset[0])

  Object.keys(ansi).map(name => {
    Object.defineProperty(clorox, name, {
      get: () => Clorox(old + ansi[name][0], (close || "") + ansi[name][1])
    })
  })

  return clorox
})("")
