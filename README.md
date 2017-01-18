# clor

[![](https://img.shields.io/npm/v/clor.svg)](https://www.npmjs.org/package/clor)
[![](http://img.shields.io/travis/jbucaran/clor.svg)](https://travis-ci.org/jbucaran/clor)

Functional terminal styles.

## Install

```sh
npm i clor
```

## Usage

```js
const clor = require("clor")
```

### Concatenate

```js
console.log(
    clor.red.bold("How") + "\n" + clor.red.inverse("are") + "\n" + clor.red.italic("you?")
)
```

### Compose

```js
console.log(`${clor.red.bold("How").newLine.inverse("are").newLine.underline("you?")}`)
```

### Nest

```js
console.log(`${clor.bold(clor.red("Bold red")).blue(" and blue")}`)
```

### Custom styles

Define custom styles.

```js
const Styles = {
    em: s => clor.bgBlack.yellow(s)
}
```

Wrap them in `clor()` or `clor.<style>()` to continue the chain.

```js
console.log(`${clor(Styles.em("Known trope")).bold(" or meme")}`)
```

### [Tagged Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_template_literals)

Require the `c` function.

```js
const c = require("clor/c")
```

Use pseudo HTML to style strings.

```js
console.log(c`<inverse>Hey Ho, <bold>Lets Go!</bold></inverse>`)
```

Embed complex expressions.

```js
console.log(c`Hello ${name ? c`<italic>${name}</italic>` : "everyone"}.`)
```

## API

### clor._style_(string)

Returns an instance of `clor`.

Available styles:

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

