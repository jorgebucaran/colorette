[![Build Status][TravisLogo]][Travis]
![](https://img.shields.io/badge/License-MIT-303030.svg?style=flat-square) ![](https://img.shields.io/badge/Color-Ful-0080ff.svg?style=flat-square)
![](https://img.shields.io/badge/Clor-JS-f00033.svg?style=flat-square)
[![NPM Downloads](http://img.shields.io/npm/dm/clor.svg?style=flat-square)](https://www.npmjs.org/package/clor)


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
<b><a href="#styles">Styles</a></b>
|
<b><a href="#license">License</a></b>

</p>

<p align="center">
<a href="https://github.com/bucaran/clor/blob/master/clor">
<img width=44% src="https://cloud.githubusercontent.com/assets/8317250/7343629/9bfe2a46-ecfe-11e4-8878-fcb9bac8b9f9.png">
</a>
</p>


# Synopsis

_Clor_ is a __30__ some LOC _original_ alternative to [colors.js](https://github.com/Marak/colors.js) and [Chalk](https://github.com/sindresorhus/chalk).


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

In _Clor_ you concatenate or use each style property as a function:

```js
console.log(String(
  clor.red.bold("fee").line.inverse("fi").line.underline("fo")
))
```

You can get the composed string using `string`

```js
console.log(
  clor.red.bold("fee").line.inverse("fi").line.underline("fo").string
)
```

Or provide your own logger function:

```js
clor.red.bold("hi").log(function (args) {
  process.stdout.write("[" + this + "]")
}/*, ... */)
```

Where `args` is optional and `this` is bound to the string.

In just a few lines of code _Clor_ packs a lot of interesting functionality.

# Install

```sh
npm install clor
```

# Usage

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

## Examples

```js
console.log("npm install %s", $.blue("clor"))

// No need to cast to String explicitly when concatenating
console.log(
  $.red("a red line") + $.line.blue("and a blue one")
)

// Using Clor
var $ = require("clor")
console.log($
  .blue("A blue line\n")
  .green("I am a green line ")
  .blue.underline.bold("with a blue substring")
  .green(" that becomes green again!") + "Au revoir!"
)

// Using Chalk
var $ = require("chalk")
console.log(
  $.blue("A blue line.\n") +
  $.green(
      "I am a green line " +
      $.blue.underline.bold("with a blue substring") +
      " that becomes green again!"
  ) + "Hasta la vista!"
)

// Using Colors.js
console.log(
  "A blue line.\n".blue +
  "I am a green line ".green +
  "with a blue substring".blue.underline.bold +
  " that becomes green again!".green +
  " Saraba!"
)
```

> Notes: To be fair, [_colors_](https://github.com/marak/colors.js/) is probably the most readable, but it extends the [String Prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype) which is generally a [bad practice](http://perfectionkills.com/whats-wrong-with-extending-the-dom/).



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
let Style {
  title: $.bold.underline,
  quote: $.inverse,
  notes: $.bold.green.italic
}

console.log("[" + Style.title(title) + "]")

```

# License

[MIT](http://opensource.org/licenses/MIT)

[TravisLogo]: http://img.shields.io/travis/bucaran/clor.svg?style=flat-square
[Travis]: https://travis-ci.org/bucaran/clor
