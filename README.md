# Colorette

[![CI](https://img.shields.io/travis/jorgebucaran/colorette.svg)](https://travis-ci.org/jorgebucaran/colorette)
[![Coverage](https://img.shields.io/codecov/c/github/jorgebucaran/colorette/master.svg)](https://codecov.io/gh/jorgebucaran/colorette)
[![](https://img.shields.io/npm/v/colorette.svg)](https://www.npmjs.org/package/colorette)

Colorette is a Node.js library for colorizing text using ANSI [escape sequences](https://en.wikipedia.org/wiki/ANSI_escape_code). It's [small](https://bundlephobia.com/result?p=colorette) and [faster](https://github.com/jorgebucaran/colorette#benchmark-results) than alternatives. Each [available style](https://github.com/jorgebucaran/colorette#styles) is a function you can use to wrap your strings in an escape sequence without prototype-chains or learning a domain specific language. Color your terminal using purely functional, idiomatic JavaScript.

## Installation

<pre>
npm i <a href="https://www.npmjs.com/package/colorette">colorette</a>
</pre>

## Usage

Import the [style functions](#styles) you want to use.

```js
const { red, blue, bold } = require("colorette")
```

Then use them to colorize your output.

```js
console.log(bold(blue("Engage!")))
```

Mix it with [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).

```js
console.log(`
  Beets are ${red("red")},
  Plums are ${blue("blue")},
  ${bold("Colorette!")}.
`)
```

Use console.log's [string substitution](https://nodejs.org/api/console.html#console_console_log_data_args).

```js
console.log(bold("Total: $%f"), 1.99)
```

You can also nest styles without breaking existing escape sequences.

```js
console.log(red(`Red Shirt ${blue("Blue Shirt")} Red Shirt`))
```

Feeling adventurous? Try the [pipeline operator](https://github.com/tc39/proposal-pipeline-operator).

```js
console.log("Make it so!" |> bold |> blue)
```

## API

### _style_(string)

A style function returns its string argument wrapped in the corresponding ANSI escape sequence.

```js
red("Red Alert") //=> \u001b[31mRed Alert\u001b[39m
```

### options.enabled

Color support is automatically enabled if your terminal supports it, but you can toggle it on/off as needed.

```js
const { options } = require("colorette")

options.enabled = false
```

## Styles

Colorette supports the standard bright color variations.

| Colors  | Background Colors | Bright Colors | Bright Background Colors | Modifiers         |
| ------- | ----------------- | ------------- | ------------------------ | ----------------- |
| black   | bgBlack           | blackBright   | bgBlackBright            | dim               |
| red     | bgRed             | redBright     | bgRedBright              | **bold**          |
| green   | bgGreen           | greenBright   | bgGreenBright            | hidden            |
| yellow  | bgYellow          | yellowBright  | bgYellowBright           | _italic_          |
| blue    | bgBlue            | blueBright    | bgBlueBright             | underline         |
| magenta | bgMagenta         | magentaBright | bgMagentaBright          | ~~strikethrough~~ |
| cyan    | bgCyan            | cyanBright    | bgCyanBright             | reset             |
| white   | bgWhite           | whiteBright   | bgWhiteBright            |                   |
| gray    |                   |               |                          |                   |

## Benchmark Results

All tests run on a 2.4GHz Intel Core i7 CPU with 16 GB memory.

```
npm i -C bench && node bench
```

<pre>
# Using Styles
chalk × 8,935 ops/sec
kleur × 297,289 ops/sec
colors × 75,594 ops/sec
ansi-colors × 166,105 ops/sec
colorette × 725,926 ops/sec

# Combining Styles
chalk × 28,834 ops/sec
kleur × 764,202 ops/sec
colors × 263,517 ops/sec
ansi-colors × 304,108 ops/sec
colorette × 2,047,564 ops/sec

# Nesting Styles
chalk × 24,584 ops/sec
kleur × 294,766 ops/sec
colors × 143,747 ops/sec
ansi-colors × 208,175 ops/sec
colorette × 388,440 ops/sec
</pre>

## License

[MIT](LICENSE.md)
