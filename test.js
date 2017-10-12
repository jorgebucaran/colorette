const c = require("./")

// Compose a color expression.

console.log(`${
  c.red.bold("What's").newLine.inverse("up?")
}`)

// Concatenate expressions.

console.log(
  c.red.bold("What's") + "\n" + c.red.inverse("up?")
)

// Nest expressions to reuse styles.

console.log(`${
  c.bold(c.red("Bold & Red"))
}`)

// Create your own styles.

const Styles = {
  em(s) {
    return c.bgBlack.yellow(s)
  }
}

console.log(`${
  c(Styles.em("A funny")).bold(" joke.")
}`)

