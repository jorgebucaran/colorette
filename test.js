const clor = require("./")

console.log(`${clor.red("Beans")}`)
console.log(`${clor.red.bold("What's").newLine.inverse("up?")}`)
console.log(clor.red.bold("What's") + "\n" + clor.red.inverse("up?"))
console.log(`${clor.bold(clor.red("Bold & Red"))}`)

const Styles = {
  em(s) {
    return clor.bgBlack.yellow(s)
  }
}

console.log(`${clor(Styles.em("Known trope")).bold(" or meme")}`)
