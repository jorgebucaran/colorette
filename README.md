# Turbocolor

[![](http://img.shields.io/travis/jorgebucaran/turbocolor.svg)](https://travis-ci.org/jorgebucaran/turbocolor)
[![Codecov](https://img.shields.io/codecov/c/github/jorgebucaran/turbocolor/master.svg)](https://codecov.io/gh/jorgebucaran/turbocolor)
[![](https://img.shields.io/npm/v/turbocolor.svg)](https://www.npmjs.org/package/turbocolor)

Turbocolor is a Node.js library for colorizing text using [ANSI escape sequences](https://en.wikipedia.org/wiki/ANSI_escape_code).

## Features

- No dependencies!
- [Toggle color support](#color-support) on/off as needed.
- Use it as a drop-in replacement for [chalk](https://github.com/chalk/chalk), [ansi-colors](https://github.com/doowb/ansi-colors), [kleur](https://github.com/lukeed/kleur), etc.
- Need for speed? Turbocolor is the [fastest](#benchmarks) terminal colorizer for Node.js.

## Installation

<pre>
npm i <a href="https://www.npmjs.com/package/turbocolor">turbocolor</a>
</pre>

## Usage

```jsx
const tc = require("turbocolor")
```

Writing with color.

```jsx
console.log(tc.red("Bonjour!"))
```

Chaining styles.

```jsx
console.log(tc.red.bold("Turbo") + tc.bgRed.white("Color"))
```

Using [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).

```jsx
console.log(`
  ${tc.bold("Score")}: ${100}
  Lives: ${tc.red.inverse(1)}
  Level: ${tc.bgCyan.black.inverse(2)}
`)
```

Nesting styles.

```jsx
console.log(`Normal ${tc.bold(`Bold ${tc.red("Bold/Red")} Bold`)} Normal`)
```

Using [string substitution](https://nodejs.org/api/console.html#console_console_log_data_args).

```jsx
console.log(tc.green("Total: $%f"), 1.99)
```

## Styles

Every style function can be chained or nested with one another and will return a string when invoked.

| Colors  | Background Colors | Modifiers         |
| ------- | ----------------- | ----------------- |
| black   | bgBlack           | dim               |
| red     | bgRed             | **bold**          |
| green   | bgGreen           | hidden            |
| yellow  | bgYellow          | _italic_          |
| blue    | bgBlue            | underline         |
| magenta | bgMagenta         | inverse           |
| cyan    | bgCyan            | ~~strikethrough~~ |
| white   | bgWhite           | reset             |
| gray    |                   |                   |

## Color Support

Color support is automatically enabled if your terminal supports it, but you can toggle it on/off as needed.

```js
const tc = require("turbocolor")

tc.enabled = false

console.log(tc.red("No color!"))
```

## Escape Codes

Turbocolor exports ANSI escape codes for each [available style](#styles). Each has an `open` and `close` property which can be used for manually styling console output.

```jsx
const { Styles } = require("turbocolor")

console.log(`${Styles.red.open}Red${Styles.red.close}`)
```

## Benchmarks

Results may vary across Node.js runtimes. All tests run on a 2.4GHz Intel Core i7 CPU with 16 GB memory.

```
npm i --prefix bench && node bench
```

<pre>
# Load Time
chalk: 14.661ms
ansi-colors: 1.050ms
kleur: 1.226ms
<b>turbocolor: 0.740ms</b>

# All Colors
chalk × 9,064 ops/sec
ansi-colors × 97,435 ops/sec
kleur × 291,646 ops/sec
<b>turbocolor × 430,379 ops/sec</b>

# Chained Colors
chalk × 1,898 ops/sec
ansi-colors × 15,102 ops/sec
kleur × 42,026 ops/sec
<b>turbocolor × 49,959 ops/sec</b>

# Nested Colors
chalk × 4,001 ops/sec
ansi-colors × 39,206 ops/sec
kleur × 84,731 ops/sec
<b>turbocolor × 96,996 ops/sec</b>
</pre>

## License

Turbocolor is MIT licensed. See [LICENSE](LICENSE.md).
