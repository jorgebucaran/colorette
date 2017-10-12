const x = require("./")

console.log(`${x.red("Beans")}`)
console.log(`${x.red.bold("What's").newLine.inverse("up?")}`)
console.log(x.red.bold("What's") + "\n" + x.red.inverse("up?"))
console.log(`${x.bold(x.red("Bold & Red"))}`)

const Styles = {
  em(s) {
    return x.bgBlack.yellow(s)
  }
}

console.log(`${x(Styles.em("A funny")).bold(" joke.")}`)
