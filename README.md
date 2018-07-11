# Clorox

[![](http://img.shields.io/travis/jorgebucaran/clorox.svg)](https://travis-ci.org/jorgebucaran/clorox)
[![Codecov](https://img.shields.io/codecov/c/github/jorgebucaran/clorox/master.svg)](https://codecov.io/gh/jorgebucaran/clorox)
[![](https://img.shields.io/npm/v/clorox.svg)](https://www.npmjs.org/package/clorox)

Clorox is a Node.js library for colorizing text using ANSI escape sequences.

- **All-in-one** — Not broken into a dozen modules that only work together.
- **Eco-friendly** — No modifications were made to the [String.prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype) in the making of this package.
- **Non-toxic** — Auto-detects color support without polluting your terminal with broken escape codes.

## Installation

<pre>
npm i <a href="https://www.npmjs.com/package/clorox">clorox</a>
</pre>

## Usage

```jsx
const x = require("clorox")
```

Write with color.

```jsx
console.log(x.red("Hello World!"))
```

Chain expressions.

```jsx
console.log(x.red.underline("Hola") + x.blue.bold("Mundo!"))
```

Compose a color expression using [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).

```jsx
console.log(
  `${x.red("Hey!")}\n${x.blue.bold("Ho!")}\n${x.green.italic("Let's go!")}`
)
```

Nest expressions to reuse styles.

```jsx
console.log(`${x.bold(x.blue("Bold/Blue") + "Bold")}`)
```

## Styles

| Colors  | Background Colors | Modifiers     |
| ------- | ----------------- | ------------- |
| black   | bgBlack           | dim           |
| red     | bgRed             | bold          |
| green   | bgGreen           | hidden        |
| yellow  | bgYellow          | italic        |
| blue    | bgBlue            | underline     |
| magenta | bgMagenta         | inverse       |
| cyan    | bgCyan            | strikethrough |
| white   | bgWhite           | reset         |
| gray    |                   |               |

## License

Clorox is MIT licensed. See [LICENSE](LICENSE.md).
