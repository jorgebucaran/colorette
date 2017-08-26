# Clor
[![](http://img.shields.io/travis/jbucaran/clor.svg)](https://travis-ci.org/jbucaran/clor)
[![](https://img.shields.io/npm/v/clor.svg)](https://www.npmjs.org/package/clor)

Clor is a Node.js library for colorizing text using ANSI escape sequences.

* **Safe**: Clor does not extend the [String.prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype).
* **Simple**: Clor has no dependencies nor is it broken into a dozen tiny modules that only work well together.
* **It Just Works™**: Out of the box, Clor detects if your terminal supports colors and knows how to fail with grace.

## Installation
<pre>
npm i <a href="https://www.npmjs.com/package/clor">clor</a>
</pre>

## Usage

```jsx
const clor = require("clor")
```

## Examples

Compose a color expression.

```jsx
console.log(
  `${clor.red.bold("What's").newLine.inverse("up?")}`
)
```

Concatenate expressions.

```jsx
console.log(
  clor.red.bold("What's") + "\n" + clor.red.inverse("up?")
)
```

Nest expressions to reuse styles.

```jsx
console.log(`${clor.bold(clor.red("Bold & Red"))}`)
```

Create your own styles.

```jsx
const Styles = {
  em(s) {
    return clor.bgBlack.yellow(s)
  }
}
```

And wrap them in a `clor()` or <code>clor.<em>\<style\></em>()</code> function call to continue the sequence.

```jsx
console.log(`${clor(Styles.em("Known trope")).bold(" or meme")}`)
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

Clor is MIT licensed. See [LICENSE](LICENSE.md).
