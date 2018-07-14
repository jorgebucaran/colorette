# Turbocolor

[![](http://img.shields.io/travis/jorgebucaran/turbocolor.svg)](https://travis-ci.org/jorgebucaran/turbocolor)
[![Codecov](https://img.shields.io/codecov/c/github/jorgebucaran/turbocolor/master.svg)](https://codecov.io/gh/jorgebucaran/turbocolor)
[![](https://img.shields.io/npm/v/turbocolor.svg)](https://www.npmjs.org/package/turbocolor)

Turbocolor is a Node.js library for colorizing text using [ANSI escape sequences](https://en.wikipedia.org/wiki/ANSI_escape_code).

## Features

- No dependencies
- [Toggle color support](#color-support) off as needed
- Use it as a drop-in replacement for [chalk](https://github.com/chalk/chalk), [ansi-colors](https://github.com/doowb/ansi-colors), [kleur](https://github.com/lukeed/kleur), etc
- Need for speed? Turbocolor is the [fastest](/bench) terminal colorizer for Node.js

## Installation

<pre>
npm i <a href="https://www.npmjs.com/package/turbocolor">turbocolor</a>
</pre>

## Usage

```jsx
const color = require("turbocolor")
```

Using color.

```jsx
console.log(color.red("Bonjour!"))
```

Chaining styles.

```jsx
console.log(color.red.bold("Turbo") + color.bgRed.white("Color"))
```

Using [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).

```jsx
console.log(`
  ${color.bold("Score")}: ${100}
  Lives: ${color.red.inverse(1)}
  Level: ${color.bgCyan.black.inverse(2)}
`)
```

Nesting styles.

```jsx
console.log(`Normal ${color.bold(`Bold ${color.red("Bold/Red")} Bold`)} Normal`)
```

Using [string substitution](https://nodejs.org/api/console.html#console_console_log_data_args).

```jsx
console.log(color.green("Total: $%f"), 1.99)
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

Turbocolor color support is enabled by default, but you can toggle it off as needed. For example, to disable color when the terminal does not support it use `supportsColor` like so.

```js
const color = require("turbocolor")

color.enabled = color.supportsColor
```

## Escape Codes

Turbocolor exports ANSI escape codes which can be used for manually styling console output. Each style has an `open`, `close` and `strip` property. The `strip` property is a regular expression that matches all `close` substrings of that style and can be useful for creating nested expressions.

```jsx
const { Styles } = require("turbocolor")

console.log(`${Styles.red.open}Red${Styles.red.close}`)
```

## License

Turbocolor is MIT licensed. See [LICENSE](LICENSE.md).
