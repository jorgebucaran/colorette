# Colorette

> Easily set your terminal text color & styles.

- No wonky prototype method-chain API.
- Automatic color support detection.
- Up to [2x faster](#benchmarks) than alternatives.
- [`NO_COLOR`](https://no-color.org) friendly. ✅

> 👋 [**Upgrading from Colorette `1.x`?**](https://github.com/jorgebucaran/colorette/issues/70)

## Quickstart

Here's the first example to get you started.

```js
import { blue, bold, underline } from "colorette"

console.log(
  blue("I'm blue"),
  bold(blue("da ba dee")),
  underline(bold(blue("da ba daa")))
)
```

Here's an example using [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).

```js
console.log(`
  There's a ${underline(blue("house"))},
  With a ${bold(blue("window"))},
  And a ${blue("corvette")}
  And everything is blue
`)
```

Of course, you can nest styles without breaking existing color sequences.

```js
console.log(bold(`I'm ${blue(`da ba ${underline("dee")} da ba`)} daa`))
```

Need to override automatic color detection? You can do that too.

```js
import { createColors } from "colorette"

const { blue } = createColors({ useColor: false })

console.log(blue("Blue? Nope, nah"))
```

## Installation

```console
npm install colorette
```

## API

### `blue(text)`

> See all [supported colors](#supported-colors).

```js
blue("I'm blue") //=> \x1b[34mI'm blue\x1b[39m
```

### `isColorSupported`

`true` if your terminal supports color, `false` otherwise. Used internally and handled for you, but exposed for convenience.

### `createColors({ useColor })`

Create a reusable instance of Colorette. Color support is automatically detected, but you can override it by setting the `useColor` boolean property.

```js
import { createColors } from "colorette"

const { blue } = createColors({ useColor: false })
```

## Environment

You can override automatic color detection from the CLI too via `NO_COLOR=` or `FORCE_COLOR=`.

```console
$ FORCE_COLOR= node example.js | ./consumer.js
```

## Supported colors

| Colors  | Background Colors | Bright Colors | Bright Background Colors | Modifiers         |
| ------- | ----------------- | ------------- | ------------------------ | ----------------- |
| black   | bgBlack           | blackBright   | bgBlackBright            | dim               |
| red     | bgRed             | redBright     | bgRedBright              | **bold**          |
| green   | bgGreen           | greenBright   | bgGreenBright            | hidden            |
| yellow  | bgYellow          | yellowBright  | bgYellowBright           | _italic_          |
| blue    | bgBlue            | blueBright    | bgBlueBright             | <u>underline</u>  |
| magenta | bgMagenta         | magentaBright | bgMagentaBright          | ~~strikethrough~~ |
| cyan    | bgCyan            | cyanBright    | bgCyanBright             | reset             |
| white   | bgWhite           | whiteBright   | bgWhiteBright            |                   |
| gray    |                   |               |                          |                   |

## [Benchmarks](https://github.com/jorgebucaran/colorette/actions/workflows/bench.yml)

```console
npm --prefix bench start
```

## License

[MIT](LICENSE.md)
