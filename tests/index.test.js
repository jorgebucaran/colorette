import * as c from "../index.js"
import { t, equal } from "twist"

const styles = [
  ["reset", "\x1b[0m", "\x1b[0m"],
  ["bold", "\x1b[1m", "\x1b[22m"],
  ["dim", "\x1b[2m", "\x1b[22m"],
  ["italic", "\x1b[3m", "\x1b[23m"],
  ["underline", "\x1b[4m", "\x1b[24m"],
  ["inverse", "\x1b[7m", "\x1b[27m"],
  ["hidden", "\x1b[8m", "\x1b[28m"],
  ["strikethrough", "\x1b[9m", "\x1b[29m"],
  ["black", "\x1b[30m", "\x1b[39m"],
  ["red", "\x1b[31m", "\x1b[39m"],
  ["green", "\x1b[32m", "\x1b[39m"],
  ["yellow", "\x1b[33m", "\x1b[39m"],
  ["blue", "\x1b[34m", "\x1b[39m"],
  ["magenta", "\x1b[35m", "\x1b[39m"],
  ["cyan", "\x1b[36m", "\x1b[39m"],
  ["white", "\x1b[37m", "\x1b[39m"],
  ["gray", "\x1b[90m", "\x1b[39m"],
  ["bgBlack", "\x1b[40m", "\x1b[49m"],
  ["bgRed", "\x1b[41m", "\x1b[49m"],
  ["bgGreen", "\x1b[42m", "\x1b[49m"],
  ["bgYellow", "\x1b[43m", "\x1b[49m"],
  ["bgBlue", "\x1b[44m", "\x1b[49m"],
  ["bgMagenta", "\x1b[45m", "\x1b[49m"],
  ["bgCyan", "\x1b[46m", "\x1b[49m"],
  ["bgWhite", "\x1b[47m", "\x1b[49m"],
  ["blackBright", "\x1b[90m", "\x1b[39m"],
  ["redBright", "\x1b[91m", "\x1b[39m"],
  ["greenBright", "\x1b[92m", "\x1b[39m"],
  ["yellowBright", "\x1b[93m", "\x1b[39m"],
  ["blueBright", "\x1b[94m", "\x1b[39m"],
  ["magentaBright", "\x1b[95m", "\x1b[39m"],
  ["cyanBright", "\x1b[96m", "\x1b[39m"],
  ["whiteBright", "\x1b[97m", "\x1b[39m"],
  ["bgBlackBright", "\x1b[100m", "\x1b[49m"],
  ["bgRedBright", "\x1b[101m", "\x1b[49m"],
  ["bgGreenBright", "\x1b[102m", "\x1b[49m"],
  ["bgYellowBright", "\x1b[103m", "\x1b[49m"],
  ["bgBlueBright", "\x1b[104m", "\x1b[49m"],
  ["bgMagentaBright", "\x1b[105m", "\x1b[49m"],
  ["bgCyanBright", "\x1b[106m", "\x1b[49m"],
  ["bgWhiteBright", "\x1b[107m", "\x1b[49m"],
]

export default [
  t("colorette", [
    t("simple", [
      ...styles.map(([name, open, close]) =>
        equal(c[name](name), open + name + close)
      ),
    ]),
    t("nesting", [
      equal(
        c.bold(`BOLD ${c.red(`RED ${c.dim("DIM")} RED`)} BOLD`),
        `\x1b[1mBOLD \x1b[31mRED \x1b[2mDIM\x1b[22m\x1b[1m RED\x1b[39m BOLD\x1b[22m`
      ),
    ]),
    t("numbers & others", [
      ...[new Date(), -1e10, -1, -0.1, 0, 0.1, 1, 1e10].map((n) =>
        equal(c.red(n), `\x1b[31m${n}\x1b[39m`)
      ),
    ]),
  ]),
]
