# Colorette

[![CI](https://img.shields.io/travis/jorgebucaran/colorette.svg)](https://travis-ci.org/jorgebucaran/colorette)
[![Coverage](https://img.shields.io/codecov/c/github/jorgebucaran/colorette/master.svg)](https://codecov.io/gh/jorgebucaran/colorette)
[![](https://img.shields.io/npm/v/colorette.svg)](https://www.npmjs.org/package/colorette)

Colorette is a Node.js library for colorizing text using [ANSI escape sequences](https://en.wikipedia.org/wiki/ANSI_escape_code).

## Features

- Zero dependency
- Automatic color support detection
- [Toggle color output on/off](#optionsenabled) as needed
- Need for speed? Colorette is the [fastest](#benchmark-results) terminal colorizer for Node.js

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

Nest styles without breaking an existing open sequence.

```js
console.log(red(`Red Shirt ${blue("Blue Shirt")} Red Shirt`))
```

Feeling adventurous? Try the [pipeline operator](https://github.com/tc39/proposal-pipeline-operator).

```js
console.log("Make it so!" |> bold |> blue)
```

## API

### _style_(string)

Every style function returns its string argument wrapped in the corresponding ANSI escape sequence.

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

Colorette supports the normal and bright color variations.

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

## To chalk or not to chalk?

Chalk is another Node.js terminal colorizer. Its core feature is a [prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype)-based chainable API where ANSI styles can be used both as properties or methods. Colorette's approach has more sticking parentheses, but the result is more idiomatic without [magical](<https://en.wikipedia.org/wiki/Magic_(programming)>) abstractions.

## Benchmark Results

All tests run on a 2.4GHz Intel Core i7 CPU with 16 GB memory.

```
npm i -C bench && node bench
```

<pre>
# Using Styles
chalk × 8,510 ops/sec
kleur × 265,858 ops/sec
colors × 64,999 ops/sec
ansi-colors × 159,135 ops/sec
colorette × 709,733 ops/sec

# Combining Styles
chalk × 24,714 ops/sec
kleur × 780,688 ops/sec
colors × 246,004 ops/sec
ansi-colors × 300,876 ops/sec
colorette × 2,049,555 ops/sec

# Nesting Styles
chalk × 24,253 ops/sec
kleur × 292,607 ops/sec
colors × 144,403 ops/sec
ansi-colors × 234,658 ops/sec
colorette × 389,825 ops/sec
</pre>

## License

Colorette is MIT licensed. See [LICENSE](LICENSE.md).
