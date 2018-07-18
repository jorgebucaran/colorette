type EscapeCode = {
  open: string
  close: string
}

type Style = {
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
} & ((string: string) => string)

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

export let enabled: boolean

export const Styles: {
  reset: EscapeCode
  bold: EscapeCode
  dim: EscapeCode
  italic: EscapeCode
  underline: EscapeCode
  inverse: EscapeCode
  hidden: EscapeCode
  strikethrough: EscapeCode
  black: EscapeCode
  red: EscapeCode
  green: EscapeCode
  yellow: EscapeCode
  blue: EscapeCode
  magenta: EscapeCode
  cyan: EscapeCode
  white: EscapeCode
  gray: EscapeCode
  bgBlack: EscapeCode
  bgRed: EscapeCode
  bgGreen: EscapeCode
  bgYellow: EscapeCode
  bgBlue: EscapeCode
  bgMagenta: EscapeCode
  bgCyan: EscapeCode
  bgWhite: EscapeCode
}
