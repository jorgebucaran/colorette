const clor = require("./")

console.log("" +
    clor(1)(2)(3)
)

console.log(`${clor
    .green(1)
    .italic.red(2)
    .underline.blue(3)
    .bold.red(4)
    .gray(5)
    .reset(6)
    .newLine
    .underline.bold.magenta("7")
    .blue(clor.italic(
            clor.underline(
                clor.bold(clor(8)))))
}`)

console.log("" +
    clor.underline.bold.bgBlue.yellow("howdy!")
)

console.log("" +
    clor("1st line").newLine("2nd line").red.newLine("3rd line")
)

console.log("" +
    clor.red.bold("fee").newLine.inverse("fi").newLine.underline("fo")
)

console.log(
    `${clor.red.bold("fee").newLine.inverse("fi").newLine.underline("fo")}`
)

console.log("" +
    clor.underline.red(1).tab.magenta(2).tab.blue(3).tab.green(4).tab.red(5)
)

console.log("" +
    clor.underline(clor.red(1).tab.magenta(2).tab.blue(3).tab.green(4)).tab.red(5)
)

