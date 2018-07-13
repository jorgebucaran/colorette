# Clorox

[![](http://img.shields.io/travis/jorgebucaran/clorox.svg)](https://travis-ci.org/jorgebucaran/clorox)
[![Codecov](https://img.shields.io/codecov/c/github/jorgebucaran/clorox/master.svg)](https://codecov.io/gh/jorgebucaran/clorox)
[![](https://img.shields.io/npm/v/clorox.svg)](https://www.npmjs.org/package/clorox)

Clorox is a Node.js library for colorizing text using [ANSI escape sequences](https://en.wikipedia.org/wiki/ANSI_escape_code).

- **All-in-one** — Not broken into a dozen modules that only work together.
- **Eco-friendly** — No modifications were made to the [String.prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype) in the making of this package.
- **It Just Works™** — Auto-detects color support and [degrades gracefully](https://en.wikipedia.org/wiki/Fault_tolerance) without contaminating your terminal with broken escape codes.

## Installation

<pre>
npm i <a href="https://www.npmjs.com/package/clorox">clorox</a>
</pre>

## Usage

```jsx
const { Clorox: x } = require("clorox")
```

Write with color.

```jsx
console.log(x.red("Bonjour!"))
```

Chain expressions.

```jsx
console.log(x.red.underline("Hello") + x.blue.bold("World") + "!")
```

Compose a color expression using [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).

```jsx
console.log(`
  Oil: ${x.bgBlack.white(42)}
  Gold: ${x.yellow(150)}
  Lumber: ${x.green(10000)}
`)
```

Nest expressions to reuse styles.

```jsx
console.log(`Normal ${x.bold(`Bold ${x.blue("Bold/Blue")} Bold`)} Normal`)
```

Use [string substitution](https://nodejs.org/api/console.html#console_console_log_data_args) for easier formatting.

```jsx
console.log(x.green("Total: $%f"), 1.99)
```

## Styles

Clorox exports ANSI escape codes which you can use for manually styling console output. They can be useful for testing your actual output matches the expected output.

Each [style](#available-styles) has an `open`, `close` and `strip` property. The `strip` property is useful for removing the previously closed escape code within a nested expression.

```jsx
const { STYLES } = require("clorox")

console.log(`${STYLES.red.open}Red${STYLES.red.close}`)
```

### Available Styles

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

## License

Clorox is MIT licensed. See [LICENSE](LICENSE.md).
