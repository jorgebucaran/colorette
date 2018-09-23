# Colorette

[![CI](http://img.shields.io/travis/jorgebucaran/colorette.svg)](https://travis-ci.org/jorgebucaran/colorette)
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

Chalk is the go-to terminal colorizer for Node.js. It's robust and actively maintained. So, why not chalk? Because we can do just as well with less. Chalk is [larger](https://packagephobia.now.sh/result?p=chalk) than [colorette](https://packagephobia.now.sh/result?p=colorette) and 20 to 100 times [slower](#benchmark-results) depending on what you're doing.

Part of the complexity comes from a chainable API where styles are used both as properties and methods by sharing the same [prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype). It isn't evident how this could work unless you look at the implementation. You are just told it does, but none of it is essential to solve the problem at thand.

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
chalk × 8,020 ops/sec
kleur × 269,041 ops/sec
ansi-colors × 156,343 ops/sec
<em>colorette × 692,207 ops/sec</em>

# Combining Styles
chalk × 27,268 ops/sec
kleur × 726,598 ops/sec
ansi-colors × 252,814 ops/sec
<em>colorette × 1,903,657 ops/sec</em>

# Nesting Styles
chalk × 22,736 ops/sec
kleur × 281,761 ops/sec
ansi-colors × 226,470 ops/sec
<em>colorette × 382,293 ops/sec</em>
</pre>

## License

Colorette is MIT licensed. See [LICENSE](LICENSE.md).
