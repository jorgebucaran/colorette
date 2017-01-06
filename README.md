# Clor

![[](https://www.npmjs.org/package/clor)](https://img.shields.io/npm/v/clor.svg)
![[](https://travis-ci.org/jbucaran/clor)](http://img.shields.io/travis/jbucaran/clor.svg)
![[](https://www.npmjs.org/package/clor)](http://img.shields.io/npm/dm/clor.svg)

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

