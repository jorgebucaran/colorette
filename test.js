const c = require("./")

console.log(`${c.red("Beans")}`)
console.log(`${c.red.bold("What's").newLine.inverse("up?")}`)
console.log(c.red.bold("What's") + "\n" + c.red.inverse("up?"))
console.log(`${c.bold(c.red("Bold & Red"))}`)

const Styles = {
  em(s) {
    return c.bgBlack.yellow(s)
  }
}

console.log(`${c(Styles.em("A funny")).bold(" joke.")}`)
