# Turbocolor

[![CI](http://img.shields.io/travis/jorgebucaran/turbocolor.svg)](https://travis-ci.org/jorgebucaran/turbocolor)
[![Coverage](https://img.shields.io/codecov/c/github/jorgebucaran/turbocolor/master.svg)](https://codecov.io/gh/jorgebucaran/turbocolor)
[![](https://img.shields.io/npm/v/turbocolor.svg)](https://www.npmjs.org/package/turbocolor)

Turbocolor is a Node.js library for colorizing text using [ANSI escape sequences](https://en.wikipedia.org/wiki/ANSI_escape_code).

## Features

- No dependencies
- [Toggle color support](#color-support) on/off as needed
- Use it as a drop-in replacement for [chalk](https://github.com/chalk/chalk), [ansi-colors](https://github.com/doowb/ansi-colors), [kleur](https://github.com/lukeed/kleur)
- Need for speed? Turbocolor is the [_fastest_](#benchmarks) terminal colorizer for Node.js

## Installation

<pre>
npm i <a href="https://www.npmjs.com/package/turbocolor">turbocolor</a>
</pre>

## Usage

```jsx
const tc = require("turbocolor")
```

Using styles.

```jsx
console.log(tc.red("Hello!"))
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

Using console.log [string substitution](https://nodejs.org/api/console.html#console_console_log_data_args).

```jsx
console.log(tc.green("Total: $%f"), 1.99)
```

## API

### tc.<samp>style[.style...]</samp>(string)

Every [style](#tc-styles) function can be chained or nested with one another and when invoked, will return the given string argument wrapped in the corresponding ANSI escape codes. Style precedence is determined by chaining order in a first-come, first-served basis. This means that `tc.red.green.blue` is reduced to `tc.red`.

### tc.Styles

Turbocolor exports ANSI escape codes for each available style. Use them if you want to stylize console output manually.

```jsx
const { Styles } = require("turbocolor")

console.log(`${Styles.red.open}Red${Styles.red.close}`)
```

### tc.enabled

Color support is automatically enabled if your terminal supports it, but you can toggle it on/off as needed.

```js
const tc = require("turbocolor")

tc.enabled = false
```

## Styles

Turbocolor only supports the regular color set at the moment. If you want to use the high intensity variations or need 256 color/Truecolor support, please use [chalk](https://github.com/chalk/chalk) instead.

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

## Benchmark Results

All tests run on a 2.4GHz Intel Core i7 CPU with 16 GB memory.

```
npm i -C bench && node bench
```

<pre>
# Using Styles
chalk × 8,510 ops/sec
kleur × 298,812 ops/sec
ansi-colors × 299,145 ops/sec
<em>turbocolor × 606,180 ops/sec</em>

# Chaining Styles
chalk × 1,881 ops/sec
kleur × 43,187 ops/sec
ansi-colors × 22,549 ops/sec
<em>turbocolor × 58,745 ops/sec</em>

# Nesting Styles
chalk × 12,449 ops/sec
kleur × 183,384 ops/sec
ansi-colors × 123,488 ops/sec
<em>turbocolor × 197,616 ops/sec</em>
</pre>

## License

Turbocolor is MIT licensed. See [LICENSE](LICENSE.md).
