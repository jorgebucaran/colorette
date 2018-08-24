# Colorette

[![CI](http://img.shields.io/travis/jorgebucaran/colorette.svg)](https://travis-ci.org/jorgebucaran/colorette)
[![Coverage](https://img.shields.io/codecov/c/github/jorgebucaran/colorette/master.svg)](https://codecov.io/gh/jorgebucaran/colorette)
[![](https://img.shields.io/npm/v/colorette.svg)](https://www.npmjs.org/package/colorette)

Colorette is a Node.js library for colorizing text using [ANSI escape sequences](https://en.wikipedia.org/wiki/ANSI_escape_code).

## Features

- Zero dependency
- [Toggle on/off](#optionsenabled) as needed
- Automatic color support detection
- Need for speed? Colorette is the [fastest](#benchmark-results) terminal colorizer for Node.js

## Installation

<pre>
npm i <a href="https://www.npmjs.com/package/colorette">colorette</a>
</pre>

## Usage

Import the [style functions](#styles) you need.

```js
const { red, blue, bold } = require("colorette")
```

Then use them to colorize your output.

```js
console.log(bold(blue("Engage!")))
```

[Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) are a good choice too.

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
red("Shields Up!") //=> \u001b[31mShields Up!\u001b[39m
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

Chalk is the go-to terminal colorizer for Node.js. It's robust and actively maintained. So, why not chalk? Because we can do just as well with less. Chalk is [larger](https://packagephobia.now.sh/result?p=chalk) than [colorette](https://packagephobia.now.sh/result?p=colorette) and 20x~100x [slower](#benchmark-results) depending on what you're doing.

Part of the complexity stems from a chainable API where styles are used both as properties or methods by sharing the same [prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype). The trick is not evident unless you look at the implementation. You are just told it works, but none of it is essential to accomplish our goals.

```js
red.bold.underline("Do you believe in magic?")
```

Colorette's approach has more sticking parentheses, but it has been carved away of all the surprises.

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
chalk × 8,537 ops/sec
ansi-colors × 163,167 ops/sec
<em>colorette × 721,085 ops/sec</em>

# Combining Styles
chalk × 27,268 ops/sec
ansi-colors × 310,516 ops/sec
<em>colorette × 2,043,137 ops/sec</em> 

# Nesting Styles
chalk × 22,897 ops/sec
ansi-colors × 239,785 ops/sec
<em>colorette × 391,617 ops/sec</em>
</pre>

## License

Colorette is MIT licensed. See [LICENSE](LICENSE.md).
