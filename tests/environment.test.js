import { exec } from "child_process"
import { fileURLToPath } from "url"
import { dirname } from "path"
import { t, equal } from "twist"

const BIN = `${dirname(fileURLToPath(import.meta.url))}/scripts/bin.js`

const execThenEqual = (cmd, expected) => (done) =>
  exec(cmd, (_, actual) => done(equal(actual, expected)))

export default [
  t("environment", [
    t("`FORCE_COLOR` forces color", [
      execThenEqual(`FORCE_COLOR= ${BIN}`, "\x1b[34mfoo\x1b[39m\n"),
    ]),
    t("`NO_COLOR` disables color", [
      execThenEqual(`NO_COLOR= ${BIN} --color`, "foo\n"),
    ]),
    t("`--no-color` disables color", [
      execThenEqual(`FORCE_COLOR= ${BIN} --no-color`, "foo\n"),
    ]),
    t("`--color` enables color", [
      execThenEqual(`${BIN} --color`, "\x1b[34mfoo\x1b[39m\n"),
    ]),
  ]),
]
