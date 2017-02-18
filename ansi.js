const none = ["", ""]

const support =
	process.env.FORCE_COLOR ||
	process.platform === "win32" ||
	process.stdout.isTTY &&
	process.env.TERM &&
	process.env.TERM !== "dumb"

module.exports = {
	black: support ? ["\x1b[30m", "\x1b[39m"] : none,
	red: support ? ["\x1b[31m", "\x1b[39m"] : none,
	green: support ? ["\x1b[32m", "\x1b[39m"] : none,
	yellow: support ? ["\x1b[33m", "\x1b[39m"] : none,
	blue: support ? ["\x1b[34m", "\x1b[39m"] : none,
	magenta: support ? ["\x1b[35m", "\x1b[39m"] : none,
	cyan: support ? ["\x1b[36m", "\x1b[39m"] : none,
	white: support ? ["\x1b[37m", "\x1b[39m"] : none,
	gray: support ? ["\x1B[90m", "\x1b[39m"] : none,

	bgBlack: support ? ["\x1b[40m", "\x1b[49m"] : none,
	bgRed: support ? ["\x1b[41m", "\x1b[49m"] : none,
	bgGreen: support ? ["\x1b[42m", "\x1b[49m"] : none,
	bgYellow: support ? ["\x1b[43m", "\x1b[49m"] : none,
	bgBlue: support ? ["\x1b[44m", "\x1b[49m"] : none,
	bgMagenta: support ? ["\x1b[45m", "\x1b[49m"] : none,
	bgCyan: support ? ["\x1b[46m", "\x1b[49m"] : none,
	bgWhite: support ? ["\x1b[47m", "\x1b[49m"] : none,

	dim: support ? ["\x1b[2m", "\x1b[22m"] : none,
	bold: support ? ["\x1b[1m", "\x1b[22m"] : none,
	hidden: support ? ["\x1b[8m", "\x1b[28m"] : none,
	italic: support ? ["\x1b[3m", "\x1b[23m"] : none,
	underline: support ? ["\x1b[4m", "\x1b[24m"] : none,
	inverse: support ? ["\x1b[7m", "\x1b[27m"] : none,
	strikethrough: support ? ["\x1b[9m", "\x1b[29m"] : none,

	newLine: ["\n", support ? "\x1b[0m" : ""],
	tab: ["\t", support ? "\x1b[0m" : ""],
	reset: support ? ["\x1b[0m"] : none
}
