# Clorox
[![](http://img.shields.io/travis/JorgeBucaran/clorox.svg)](https://travis-ci.org/JorgeBucaran/clorox)
[![Codecov](https://img.shields.io/codecov/c/github/clorox/clorox/master.svg)](https://codecov.io/gh/clorox/clorox)
[![](https://img.shields.io/npm/v/clorox.svg)](https://www.npmjs.org/package/clorox)

Clorox is a Node.js library for colorizing text using ANSI escape sequences.

* **Nontoxic**: Clorox does not extend the [String.prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype).
* **Concentrated**: Clorox has no dependencies, nor is it broken into a dozen modules that only work together.
* **It Just Works™**: Clorox auto-detects terminal color support. 99% percent of the time, it works every time.

## Installation

<pre>
npm i <a href="https://www.npmjs.com/package/clorox">clorox</a>
</pre>

## Usage

```jsx
const x = require("clorox")
```

## Examples

Compose a color expression.

```jsx
console.log(`${x.red.bold("What's").newLine.inverse("up?")}`)
```

Concatenate expressions.

```jsx
console.log(x.red.bold("What's") + "\n" + x.red.inverse("up?"))
```

Nest expressions to reuse styles.

```jsx
console.log(`${x.bold(x.red("Bold & Red"))}`)
```

Create your own styles.

```jsx
const Styles = {
  em(s) {
    return x.bgBlack.yellow(s)
  }
}

console.log(`${x(Styles.em("Known trope")).bold(" or meme")}`)
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
