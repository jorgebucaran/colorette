# Clor

![[](https://www.npmjs.org/package/clor)](https://img.shields.io/npm/v/clor.svg)
![[](https://travis-ci.org/jbucaran/clor)](http://img.shields.io/travis/jbucaran/clor.svg)
![[](https://www.npmjs.org/package/clor)](http://img.shields.io/npm/dm/clor.svg)

Node.js terminal color library

## Install

```sh
npm install clor
```

## Usage

```js
const clor = require("clor")

clor.red("hey")
//→ \u001b[31mhey\u001b[0m

clor.underline.bold.bgBlue.yellow("howdy!")
//→ \u001b[4m\u001b[1m\u001b[44m\u001b[33mhowdy!\u001b[0m

// You can add new lines with `line` or \n
clor("1st line").line("2nd line").red.line("3rd line")
//→ 1st line\u001b[0m\n2nd line\u001b[0m\u001b[31m\n3rd line\u001b[0m
```

## Compare

In [Chalk](https://github.com/sindresorhus/chalk) you concatenate strings to compose your output.

```js
console.log(
  chalk.red.bold("fee") + "\n" + chalk.inverse("fi") + "\n" + chalk.underline("fo")
)
```

In _Clor_ you can do that or use any style property as a function.

```js
console.log(`${clor.red.bold("fee").line.inverse("fi").line.underline("fo")}`)
```

```js
console.log(String(
  clor.red.bold("fee").line.inverse("fi").line.underline("fo")
))
```

You can get the string and styles using `string`,

```js
console.log(
  clor.red.bold("fee").line.inverse("fi").line.underline("fo").string
)
```

or use the `log()` wrapper to `console.log()`.

```js
clor.red.bold("fee").line.inverse("fi").line.underline("fo").log("hi")
```

You can also provide your own logger function.

```js
clor.red.bold("hi").log(_ => process.stdout.write("[" + timestamp() + "] " + this))
```

> Inside the logger wrapper `this` is bound to the _string_.

In just a few [lines of code](https://github.com/jbucaran/clor/blob/master/index.js) _Clor_ packs a lot of interesting functionality.

## Custom Styles

Create custom styles easily:

```js
const Style = {
  head: clor.bold.underline.green,
  file: clor.blue.bold("\"%s\""),
  date: clor.yellow("{{").gray(datefmt(new Date(), "HH:MM:ss")).yellow("}}")
}

console.log(Style.head("Starting app..."))
console.log("Loading file " + Style.file + " on " + Style.date, file)
```

