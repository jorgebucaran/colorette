import { exec } from "child_process"
import { fileURLToPath } from "url"
import { dirname } from "path"
import { t, equal } from "twist"

const BIN = `${dirname(fileURLToPath(import.meta.url))}/scripts/bin.js`

const execThenEqual = (cmd, expected) => (done) =>
  exec(cmd, (_, actual) => done(equal(actual, expected)))

export default [
  t("environment", [
    t("`FORCE_COLOR=1` forces color", [
      execThenEqual(`FORCE_COLOR=1 ${BIN}`, "\x1b[34mfoo\x1b[39m\n"),
    ]),
    t("`FORCE_COLOR=0` disables color", [
      execThenEqual(`FORCE_COLOR=0 ${BIN}`, "foo\n"),
    ]),
    t("`FORCE_COLOR=` does not force color", [
      execThenEqual(`FORCE_COLOR= ${BIN}`, "foo\n"),
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
