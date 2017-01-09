const styles = require("./ansi")

module.exports = function (strings, ...values) {
    var v = "", t = "", prev = "", tags = [], vals = [], result = []

    for (var i = 0; i < strings.length; i++) {
        var s = strings[i]

        for (var j = 0; j < s.length; j++) {
            var c = s[j]

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
                        value: Array.isArray(vals[vals.length-1])
                            ? vals.pop()
                            : vals//.slice()
                    }

                    if (tags.length === 0) {
                        result.push(obj)

                        if (Array.isArray(vals[vals.length-1]))
                            delete vals[vals.length-1]
                        else
                            vals = []
                    } else {
                        if (Array.isArray(vals[vals.length - 1])) {
                            vals[vals.length-1].push(obj)
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
                } else {
                    v += c
                }
            }

            if (prev === "<" || prev === "/") {
                t += c
            } else {
                v += c
            }

        }//j

        v += values[i] || ""

    }//i

    if (v !== "") {
        result.push(v)
    }

    const unwrap = obj => Object.values(obj).reduce((s, i) =>
        s + (i.style ? styles[i.style][0] + unwrap(i.value) + styles[i.style][1] : i), "")

    return unwrap(result) + styles.reset[0]
}




