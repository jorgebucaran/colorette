> Terminal styles

[![][clor-badge]][clor]
[![npm package][npm-ver-link]][clor]
[![][dl-badge]][npm-pkg-link]
[![][travis-logo]][travis]
![][mit-badge]

<a name="clor"></a>

<p align="center">

<b><a href="#synopsis">Synopsis</a></b>
|
<b><a href="#examples">Examples</a></b>
|
<b><a href="#install">Install</a></b>
|
<b><a href="#usage">Usage</a></b>
|
<b><a href="#wordwrap">Wordwrap</a></b>
|
<b><a href="#styles">Styles</a></b>
|
<b><a href="#license">License</a></b>

</p>

<p align="center">
<a href="https://github.com/bucaran/clor/blob/master/README.md">
<img width=300px src="https://cloud.githubusercontent.com/assets/8317250/8764977/89eeeaa0-2e32-11e5-9e20-fe41d5450b52.png">
</a>
</p>


# Synopsis

_Clor_ is a __40__ some LOC _original_ alternative to [Chalk](https://github.com/sindresorhus/chalk).


<p align="center">
<a href="https://github.com/bucaran/clor/blob/master/clor">
<img src="https://cloud.githubusercontent.com/assets/8317250/7427256/5470b678-f012-11e4-9c46-dbfa0c958fe7.png">
</a>
</p>

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

# Install

```sh
npm install clor
```

# Usage

```js
const $ = require("clor")

$.red("hey")
//→ \u001b[31mhey\u001b[0m

$.underline.bold.bgBlue.yellow("howdy!")
//→ \u001b[4m\u001b[1m\u001b[44m\u001b[33mhowdy!\u001b[0m

// You can add new lines with `line` or \n
$("1st line").line("2nd line").red.line("3rd line")
//→ 1st line\u001b[0m\n2nd line\u001b[0m\u001b[31m\n3rd line\u001b[0m

// Break lines up by number of columns.
$("The quick brown ")
  .red("fox jumped over ")
  .magenta("the lazy dog")
  .break(40)
```

## Examples

```js
console.log("npm i %s", $.blue("clor"))

console.log(
  $.red("a red line") + $.line.blue("and a blue one")
)

// Using Clor
const $ = require("clor")
console.log($
  .blue("A blue line\n")
  .green("I am a green line ")
  .blue.underline.bold("with a blue substring")
  .green(" that becomes green again!") + "Au revoir!"
)

// Using Chalk
const $ = require("chalk")
console.log(
  $.blue("A blue line.\n") +
  $.green(
      "I am a green line " +
      $.blue.underline.bold("with a blue substring") +
      " that becomes green again!"
  ) + "Hasta la vista!"
)
```

# Wordwrap

```js
const clor = require("clor")

clor("The quick brown ")
  .red("fox jumped over ")("the lazy ")
  .green("dog and then ran away with the unicorn.")
  .break(40)
```

<p align="center">
<img src="https://cloud.githubusercontent.com/assets/8317250/9351491/cf116ac0-4694-11e5-9a97-96724c3a09f7.png">
</p>


# Styles

|    Modifiers    |   Colors  | Background Colors |
|:---------------:|:---------:|:-----------------:|
|     `reset`     |  `black`  |      bgBlack      |
|      `bold`     |   `red`   |      `bgRed`      |
|      `dim`      |  `green`  |     `bgGreen`     |
|     `italic`    |  `yellow` |     `bgYellow`    |
|   `underline`   |   `blue`  |      `bgBlue`     |
|    `inverse`    | `magenta` |    `bgMagenta`    |
|     `hidden`    |   `cyan`  |      `bgCyan`     |
| `strikethrough` |  `white`  |     `bgWhite`     |
|      `line`     |   `gray`  |                   |
|  `_` or `space` |           |                   |
|      `tab`      |           |                   |

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

# License

[MIT][license] © [Jorge Bucaran][author] et [al][contributors]
:heart:


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
