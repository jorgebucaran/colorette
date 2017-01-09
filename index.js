const ansi = require("./ansi")

module.exports = (function Clor(prev, wrap = ansi.reset[0]) {
	const clor = s => Clor(clor.toString(s))

	clor.toString = (s = "") => prev + s + wrap

	Object.keys(ansi).forEach(k => Object.defineProperty(clor, k, {
		get: _ => Clor(prev + ansi[k][0], ansi[k][1])
	}))

	return clor
} (""))

