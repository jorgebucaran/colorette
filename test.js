const clor = require("./")

console.log("" +
    clor("How").newLine("are").newLine("you?")
)

console.log(
    `${clor.red.bold("How").newLine.inverse("are").newLine.italic("you?")}`
)

console.log(
    clor.red.bold("How") + "\n" + clor.red.inverse("are") + "\n" + clor.red.italic("you?")
)

console.log("" +
    clor.bold(clor.red("Bold red")).blue(" and blue")
)

const Styles = {
    em: s => clor.bold.inverse(s)
}

console.log("" +
    clor(Styles.em("Known trope")).bold(" or meme")
)

// Tagged Literals

const c = require("./c")
const x = "Bold", y = "red", z = "blue"

console.log(
    c`<bold>${x}, <red>${y}</red></bold> and <blue>${z}.</blue>`
)

const name = ["Leia", "Han", "Ben"]
    [Math.floor(Math.random() * 4)]

console.log(
    c`Hi ${name ? c`<bold>${name}</bold>` : "everyone"}.`)
