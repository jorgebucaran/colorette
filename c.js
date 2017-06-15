"use strict"

const ansi = require("./ansi")

const cx = c =>
  function(strings) {
    let v = "",
      t = "",
      prev = "",
      tags = [],
      vals = [],
      result = []

    for (let i = 0; i < strings.length; i++) {
      let s = strings[i]

      for (let j = 0; j < s.length; j++) {
        let c = s[j]

        if (c === "<") {
          if (v !== "") {
            if (tags.length === 0) {
              result.push(v)
            } else {
              if (Array.isArray(vals[vals.length - 1])) {
                vals[vals.length - 1].push(v)
              } else {
                vals.push(v)
              }
            }
            v = ""
          }

          if (prev === c) {
            throw SyntaxError("Unexpected <")
          }

          prev = c
          continue
        }

        if (c === ">") {
          if (t === "") {
            throw SyntaxError("Unexpected >")
          }

          if (prev === "/") {
            const tag = tags.pop()

            if (tag !== t) {
              throw SyntaxError("Unxpected tag: " + tag)
            }

            const obj = {
              style: tag,
              value: Array.isArray(vals[vals.length - 1])
                ? vals.pop()
                : vals //.slice()
            }

            if (tags.length === 0) {
              result.push(obj)

              if (Array.isArray(vals[vals.length - 1]))
                delete vals[vals.length - 1]
              else vals = []
            } else {
              if (Array.isArray(vals[vals.length - 1])) {
                vals[vals.length - 1].push(obj)
              } else {
                vals.push(obj)
              }
            }
          } else {
            if (tags.length > 0) {
              vals.push([])
            }
            tags.push(t)
          }

          prev = c

          t = ""
          continue
        }

        if (c === "/") {
          if (prev === "<") {
            prev = c
            continue
          }
        }

        if (prev === "<" || prev === "/") {
          t += c
        } else {
          v += c
        }
      } //j

      v += arguments[i + 1] || ""
    } //i

    if (v !== "") {
      result.push(v)
    }

    return c(result) + ansi.reset[0]
  }

const c = obj =>
  Object.keys(obj)
    .map(k => obj[k])
    .reduce(
      (s, i) =>
        s +
        (i.style
          ? ansi[i.style][0] + c(i.value) + ansi[i.style][1]
          : i),
      ""
    )

module.exports = cx(c)
