# Colorette

[![CI](http://img.shields.io/travis/jorgebucaran/colorette.svg)](https://travis-ci.org/jorgebucaran/colorette)
[![Coverage](https://img.shields.io/codecov/c/github/jorgebucaran/colorette/master.svg)](https://codecov.io/gh/jorgebucaran/colorette)
[![](https://img.shields.io/npm/v/colorette.svg)](https://www.npmjs.org/package/colorette)

Colorette is a Node.js library for colorizing text using [ANSI escape sequences](https://en.wikipedia.org/wiki/ANSI_escape_code).

## Features

- No dependencies
- Includes normal and bright colors
- [Toggle color support](#options-enabled) on/off as needed
- Need for speed? Colorette is the [_fastest_](#benchmarks) terminal colorizer for Node.js

## Installation

<pre>
npm i <a href="https://www.npmjs.com/package/colorette">colorette</a>
</pre>

## Usage

Import the [style functions](#styles) you need.

```js
const { red, green, bold } = require("colorette")
```

Then use them to colorize your output.

```js
console.log(bold(green("Engage!")))
```

[Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) are a good choice too.

```js
console.log(`
  Beets are ${red("red")},
  Cucumbers are ${green("green")},
  ${bold("Colorette!")}.
`)
```

Use console.log's [string substitution](https://nodejs.org/api/console.html#console_console_log_data_args).

```js
console.log(bold("Total: $%f"), 1.99)
```

Nest styles without breaking an existing open sequence.

```js
console.log(red(`Red ${blue("Blue")} Red`))
```

Feeling adventurous? Try the [pipeline operator](https://github.com/tc39/proposal-pipeline-operator).

```js
console.log("Make it so!" |> bold |> red)
```

## API

### _style_(string)

Every style function returns its string argument wrapped in the corresponding ANSI escape sequence.

```js
red("Red") //=> \u001b[31mRed\u001b[39m
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

Chalk is the go-to terminal colorizer for Node.js. It's robust and actively maintained. So, why not chalk? Chalk is [larger](https://packagephobia.now.sh/result?p=chalk) than [colorette](https://packagephobia.now.sh/result?p=colorette) and 20x~100x [slower](#benchmark-results) depending on what you're doing. Every time you add it as a dependency you make your modules heavier and slower for no reason.

Part of the complexity stems from its chainable API where every style is both a property and a method sharing the same [prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype). A clever approach it is, but to describe it as expressive would be an overstatement. It's not evident how it works until you've delved deeply into its implementation, none of which is essential to accomplish the task at hand.

```js
red.bold.underline("Do you believe in magic?")
```

Colorette has more sticking parentheses, but it has been carved away of all the surprises.

```js
red(bold(underline("Do you believe in magic?")))
```

## Benchmark Results

All tests run on a 2.4GHz Intel Core i7 CPU with 16 GB memory.

```
npm i -C bench && node bench
```

<pre>
# Using Styles
chalk × 8,627 ops/sec
ansi-colors × 289,823 ops/sec
<em>colorette × 724,394 ops/sec</em>

# Combining Styles
chalk × 1,906 ops/sec
ansi-colors × 21,747 ops/sec
<em>colorette × 76,419 ops/sec</em>

# Nesting Styles
chalk × 22,422 ops/sec
ansi-colors × 289,973 ops/sec
<em>colorette × 393,130 ops/sec</em>
</pre>

## License

Colorette is MIT licensed. See [LICENSE](LICENSE.md).
