const ansi = require("./ansi")

module.exports = (function Clor(old, close) {
  const clor = s => Clor(clor.toString(s))

  clor.toString = s => old + (s || "") + (close || ansi.reset[0])

  Object.keys(ansi).forEach(name =>
    Object.defineProperty(clor, name, {
      get: () => Clor(old + ansi[name][0], ansi[name][1])
    })
  )

  return clor
})("")
