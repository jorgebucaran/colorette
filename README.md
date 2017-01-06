# Clor

[![](https://img.shields.io/npm/v/clor.svg)](https://www.npmjs.org/package/clor)
[![](http://img.shields.io/travis/jbucaran/clor.svg)](https://travis-ci.org/jbucaran/clor)

Functional terminal styles.

## Install

```sh
npm i clor
```

## Usage

### Concatenation

```js
console.log(
    clor.red.bold("fee") + "\n" + clor.inverse("fi") + "\n" + clor.underline("fo")
)
```

### Composition

```js
console.log("" +
    clor.red.bold("fee").newLine.inverse("fi").newLine.underline("fo")
)
```

or

```js
console.log(
    `${clor.red.bold("fee").newLine.inverse("fi").newLine.underline("fo")}`
)
```

### Nested Styles

```js
console.log("" +
    clor.bold(clor.red("Bold and red"))
        .red("Just red")
)
```

## API

### clor._style_(string)

Returns an instance of `clor` so you can concatenate multiple style calls.

Available styles:

* black
* red
* green
* yellow
* blue
* magenta
* cyan
* white
* gray

* bgBlack
* bgRed
* bgGreen
* bgYellow
* bgBlue
* bgMagenta
* bgCyan
* bgWhite

* dim
* bold
* hidden
* italic
* underline
* inverse
* strikethrough

* newLine
* tab
* reset

