interface Turbocolor {
  reset: Style
  bold: Style
  dim: Style
  italic: Style
  underline: Style
  inverse: Style
  hidden: Style
  strikethrough: Style
  black: Style
  red: Style
  green: Style
  yellow: Style
  blue: Style
  magenta: Style
  cyan: Style
  white: Style
  gray: Style
  bgBlack: Style
  bgRed: Style
  bgGreen: Style
  bgYellow: Style
  bgBlue: Style
  bgMagenta: Style
  bgCyan: Style
  bgWhite: Style
}

interface Style extends Turbocolor {
  (string: string): string
}

export const reset: Style
export const bold: Style
export const dim: Style
export const italic: Style
export const underline: Style
export const inverse: Style
export const hidden: Style
export const strikethrough: Style
export const black: Style
export const red: Style
export const green: Style
export const yellow: Style
export const blue: Style
export const magenta: Style
export const cyan: Style
export const white: Style
export const gray: Style
export const bgBlack: Style
export const bgRed: Style
export const bgGreen: Style
export const bgYellow: Style
export const bgBlue: Style
export const bgMagenta: Style
export const bgCyan: Style
export const bgWhite: Style

interface StyleCode {
  open: string
  close: string
}

export const Styles: {
  reset: StyleCode
  bold: StyleCode
  dim: StyleCode
  italic: StyleCode
  underline: StyleCode
  inverse: StyleCode
  hidden: StyleCode
  strikethrough: StyleCode
  black: StyleCode
  red: StyleCode
  green: StyleCode
  yellow: StyleCode
  blue: StyleCode
  magenta: StyleCode
  cyan: StyleCode
  white: StyleCode
  gray: StyleCode
  bgBlack: StyleCode
  bgRed: StyleCode
  bgGreen: StyleCode
  bgYellow: StyleCode
  bgBlue: StyleCode
  bgMagenta: StyleCode
  bgCyan: StyleCode
  bgWhite: StyleCode
}

export let enabled: boolean
