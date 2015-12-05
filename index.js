/*ಠ_ಠ*/"use strict"
var ansi = require("ansi-styles")
ansi.line = { open: "\n", close: "" }
ansi.tab = { open: "\t", close: "" }

module.exports = (function clor (s, open) {
  function $ (str) {
    return (str === undefined) ?
      $.toString() : clor(s + str + ansi.reset.close)
  }

  $.toString = function () {
    return (open === true) ?
      s + ansi.reset.close : s
  }

  $.log = function (logger) {
    var args = [].slice.call(arguments, 0)
    if (typeof logger === "function") {
      logger.apply(s, args.slice(1))
    } else {
      console.log.apply(console, [s].concat(args))
    }
  }

  Object.defineProperty($, "string", {
    get: function () { return $.toString() }
  })

  Object.keys(ansi).forEach(function (style) {
    Object.defineProperty($, style, {
      get: function () {
        return clor(s + ansi[style].open, true)
      }
    })
  })

  return $
}(""))
