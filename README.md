# clor

[![](https://img.shields.io/npm/v/clor.svg)](https://www.npmjs.org/package/clor)
[![](http://img.shields.io/travis/jbucaran/clor.svg)](https://travis-ci.org/jbucaran/clor)

Functional terminal styles.

## Install

```sh
npm i clor
```

## Usage

### Concatenate

```js
console.log(
    clor.red.bold("fee") + "\n" + clor.inverse("fi") + "\n" + clor.underline("fo")
)
```

### Compose

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

### Nest

```js
console.log("" +
    clor.bold(clor.red("Bold and red"))
        .red("Just red")
)
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
