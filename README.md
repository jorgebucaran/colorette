[![npm package][npm-ver-link]][clor]
[![][dl-badge]][npm-pkg-link]
[![][travis-logo]][travis]
![][mit-badge]

<a name="clor"></a>

<div align="center">
<a href="https://github.com/bucaran/clor/blob/master/README.md">
<img width=450px src="https://cloud.githubusercontent.com/assets/8317250/11323594/d63da20a-9158-11e5-9865-a5a84e861b68.png">
</a>
</div>


<p align="center">

<b><a href="#synopsis">Synopsis</a></b>
|
<b><a href="#install">Install</a></b>
|
<b><a href="#usage">Usage</a></b>
|
<b><a href="#compare">Compare</a></b>
|
<b><a href="#custom-styles">Custom Styles</a></b>
</p>

# Synopsis

_Clor_ is a __30__ some LOC lightweight alternative to [colors.js](https://github.com/Marak/colors.js) or [Chalk](https://github.com/sindresorhus/chalk).


## Install

```sh
npm install clor
```

## Usage

```js
var $ = require("clor")

$.red("hey")
//→ \u001b[31mhey\u001b[0m

$.underline.bold.bgBlue.yellow("howdy!")
//→ \u001b[4m\u001b[1m\u001b[44m\u001b[33mhowdy!\u001b[0m

// You can add new lines with `line` or \n
$("1st line").line("2nd line").red.line("3rd line")
//→ 1st line\u001b[0m\n2nd line\u001b[0m\u001b[31m\n3rd line\u001b[0m
```

## Compare

In [Chalk](https://github.com/sindresorhus/chalk) you concatenate strings to compose your output:

```js
console.log(
  chalk.red.bold("fee") + "\n" + chalk.inverse("fi") + "\n" + chalk.underline("fo")
)
```

In _Clor_ you can concatenate and use any style property as a function

```js
console.log(`${clor.red.bold("fee").line.inverse("fi").line.underline("fo")}`)
```

```js
console.log(String(
  clor.red.bold("fee").line.inverse("fi").line.underline("fo")
))
```

You can get the string and styles using `string`

```js
console.log(
  clor.red.bold("fee").line.inverse("fi").line.underline("fo").string
)
```

or use the `log()` wrapper to `console.log()`

```js
clor.red.bold("fee").line.inverse("fi").line.underline("fo").log(/* args */)
```

You can also provide your own logger function

```js
clor.red.bold("hi").log(function (args) {
  process.stdout.write("[" + timestamp() + "] " + this)
}/*, ... */)
```

> Inside the logger wrapper `this` is bound to the _string_.

In just a few [lines of code](https://github.com/bucaran/clor/blob/master/index.js) _Clor_ packs a lot of interesting functionality.

## Custom Styles

Create custom styles easily:

```js
const Style = {
  head: $.bold.underline.green,
  file: $.blue.bold("\"%s\""),
  date: $.yellow("{{").gray(datefmt(new Date(), "HH:MM:ss")).yellow("}}")
}

console.log(Style.head("Starting app..."))
console.log("Loading file " + Style.file + " on " + Style.date, file)

```



[license]: http://opensource.org/licenses/MIT
[author]: http://about.bucaran.me
[clor]: https://www.github.com/bucaran/clor
[clor-badge]: https://img.shields.io/badge/clor-JS-33CCFF.svg?style=flat-square
[mit-badge]: https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square
[npm-pkg-link]: https://www.npmjs.org/package/clor
[npm-ver-link]: https://img.shields.io/npm/v/clor.svg?style=flat-square
[dl-badge]: http://img.shields.io/npm/dm/clor.svg?style=flat-square
[travis-logo]: http://img.shields.io/travis/bucaran/clor.svg?style=flat-square
[travis]: https://travis-ci.org/bucaran/clor
[contributors]: https://github.com/bucaran/clor/graphs/contributors
