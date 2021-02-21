# Colorette

> Terminal colors and styles for Node.js.

- No wonky prototype chain API or monkey-patching.
- Automatic color support detection.
- Up to [2x faster](#benchmarks) than alternatives.
- [`NO_COLOR`](https://no-color.org) friendly. 👌

Just import the colors and styles you want, and get down to business.

```js
import { blue, bold, underline } from "colorette"

console.log(
  blue("I'm blue"),
  bold(blue("da ba dee")),
  underline(bold(blue("da ba daa")))
)
```

Use with [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) to interpolate variables, expressions, and create multi-line strings easily.

```js
console.log(`
  There's a ${underline(blue("house"))},
  With a ${bold(blue("window"))},
  And a ${blue("corvette")}
  And everything is blue
`)
```

Nest styles without breaking existing color sequences.

```js
console.log(bold(`I'm ${blue(`da ba ${underline("dee")} da ba`)} daa`))
```

Feeling adventurous? Try the [pipeline operator](https://github.com/tc39/proposal-pipeline-operator).

```js
console.log("Da ba dee da ba daa" |> blue |> bold)
```

## Installation

```console
npm install colorette
```

## Supported styles

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

## API

### <code><i>style</i>(s)</code>

```js
import { blue } from "colorette"

blue("I'm blue") //=> \u001b[34mI'm blue\u001b[39m
```

### `options.enabled`

Toggle color support as needed.

```js
import { options } from "colorette"

options.enabled = false
```

> You can also [set](https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_process_env) `FORCE_COLOR` or `NO_COLOR` from the CLI to forcibly enable or disable color output.

## Benchmarks

```console
npm --prefix bench start
```

## License

[MIT](LICENSE.md)
