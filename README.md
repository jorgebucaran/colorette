# Clorox
[![](http://img.shields.io/travis/JorgeBucaran/clorox.svg)](https://travis-ci.org/JorgeBucaran/clorox)
[![Codecov](https://img.shields.io/codecov/c/github/JorgeBucaran/clorox/master.svg)](https://codecov.io/gh/JorgeBucaran/clorox)
[![](https://img.shields.io/npm/v/clorox.svg)](https://www.npmjs.org/package/clorox)

Clorox is a Node.js library for colorizing text using ANSI escape sequences.

* **Eco-friendly**: Clorox does not extend the [String.prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype).
* **Concentrated**: Clorox has no dependencies, nor is it broken into a dozen modules that only work together.
* **Non-toxic**: Clorox auto-detects terminal color support and doesn't pollute your terminal with unrecognized escape codes.

## Installation

<pre>
npm i <a href="https://www.npmjs.com/package/clorox">clorox</a>
</pre>

## Usage

```jsx
const c = require("clorox")
```

## Examples

Compose a color expression.

```jsx
console.log(`${c.red.bold("What's").newLine.inverse("up?")}`)
```

Concatenate expressions.

```jsx
console.log(c.red.bold("What's") + "\n" + c.red.inverse("up?"))
```

Nest expressions to reuse styles.

```jsx
console.log(`${c.bold(c.red("Bold & Red"))}`)
```

Create your own styles.

```jsx
const Styles = {
  em(s) {
    return c.bgBlack.yellow(s)
  }
}

console.log(`${c(Styles.em("Known trope")).bold(" or meme")}`)
```

## Styles

| Colors  | Background Colors | Modifiers     | Other   |
|---------|-------------------|---------------|---------|
| black   | bgBlack           | dim           | newLine |
| red     | bgRed             | bold          | tab     |
| green   | bgGreen           | hidden        | reset   |
| yellow  | bgYellow          | italic        |         |
| blue    | bgBlue            | underline     |         |
| magenta | bgMagenta         | inverse       |         |
| cyan    | bgCyan            | strikethrough |         |
| white   | bgWhite           |               |         |
| gray    |                   |               |         |

## License

Clorox is MIT licensed. See [LICENSE](LICENSE.md).
