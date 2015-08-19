/*ಠ_ಠ*/"use strict"
var ansi = require("ansi-styles")
ansi.line = { open: "\n", close: "" }
ansi.tab = { open: "\t", close: "" }
ansi._ = { open: " ", close: "" }

module.exports = (function clor (s) {
  function $ (str) {
    return (str === undefined) ?
      $.toString() : clor(s + str + ansi.reset.close)
  }

  $.toString = function () { return s + ansi.reset.close }

  $.log = function (logger) {
    if (typeof logger === "function") {
      logger.apply(s, [].slice.call(arguments, 0).slice(1))
    } else {
      console.log.apply(console, [s].concat([].slice.call(arguments, 0)))
    }
  }

  $.break = function (columns) {
    var br = "", open = false
    for (var i = 0, visible = 0; i < s.length; i++) {
      br += s[i]
      if (visible >= columns - 2 && s[i] === " ") {
        br += "\n"
        visible = 0
      }
      if (s[i] === "\u001b") open = true
      if (!open) visible++
      if (open && s[i] === "m") open = false
    }
    console.log(br)
  }

  Object.defineProperty($, "string", {
    get: function () { return $.toString() }
  })

  Object.keys(ansi).forEach(function (style) {
    Object.defineProperty($, style, {
      get: function () {
        return clor(s + ansi[style].open)
      }
    })
  })

  return $
}(""))
