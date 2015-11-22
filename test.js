#!/usr/bin/env node

// var test = require("tap").test
var $ = require("./")

console.log("npm install %s", $.blue("clor"))

console.log(String($
  ("Roses are ").red("red")(", violets are ")
  .blue("blue")(", I'm ")
  .dim("schizophrenic")(", and so am I")
))

console.log($
  .red("red").blue("blue").green("green")()
)

console.log(String($
  .red("some red").tab("interlude")
  .line.bgRed.yellow("a new line, yellow on red")
  .line.bgYellow.red("and red on a yellow line!")
))

// No need to cast to String explicitly when concatenating
console.log(
  $.red("a red line") +
  $.line.blue("and a blue one")
)

// test("test", function (t) {
//   // Do some more meaningful tests here!!
//   t.end()
// })
