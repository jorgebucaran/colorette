const isColorSupported =
	process.env.FORCE_COLOR ||
	process.platform === "win32" ||
	(process.stdout.isTTY && process.env.TERM && process.env.TERM !== "dumb")

const EMPTY_CODE = { left: "", right: "", rgx: "" }

const Color = function(left, right) {
	return isColorSupported
		? {
				left: `\x1b[${left}m`,
				right: `\x1b[${right}m`,
				rgx: new RegExp(`\\x1b\\[${right}m`, "g")
		  }
		: EMPTY_CODE
}

const COLORS = {
	black: Color(30, 39),
	red: Color(31, 39),
	green: Color(32, 39),
	yellow: Color(33, 39),
	blue: Color(34, 39),
	magenta: Color(35, 39),
	cyan: Color(36, 39),
	white: Color(37, 39),
	gray: Color(90, 39),

	bgBlack: Color(40, 49),
	bgRed: Color(41, 49),
	bgGreen: Color(42, 49),
	bgYellow: Color(43, 49),
	bgBlue: Color(44, 49),
	bgMagenta: Color(45, 49),
	bgCyan: Color(46, 49),
	bgWhite: Color(47, 49),

	reset: Color(0, 0),
	bold: Color(1, 22),
	dim: Color(2, 22),
	italic: Color(3, 23),
	underline: Color(4, 24),
	inverse: Color(7, 27),
	hidden: Color(8, 28),
	strikethrough: Color(9, 29)
}

const Clorox = colors => {
	const self = Object.setPrototypeOf(s => {
		const colors = self.colors

		for (var i = 0, n = colors.length; i < n; i++) {
			let color = COLORS[colors[i]]
			s = color.left + s.replace(color.rgx, color.left) + color.right
		}

		return s
	}, Clorox)

	self.colors = colors

	return self
}

for (const color in COLORS) {
	Object.defineProperty(Clorox, color, {
		get() {
			if (this.colors === undefined) return Clorox([color])

			this.colors.push(color)

			return this
		}
	})
}

module.exports = Clorox
