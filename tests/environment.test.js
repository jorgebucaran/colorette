import { exec, execFile } from "child_process"
import { fileURLToPath } from "url"
import { dirname } from "path"
import { t, equal } from "twist"

const BIN = `${dirname(fileURLToPath(import.meta.url))}/scripts/bin.js`
const INDEX = new URL("../index.js", import.meta.url).href
const COLOR_ENV = new Set([
  "NO_COLOR",
  "FORCE_COLOR",
  "CI",
  "GITHUB_ACTIONS",
  "GITLAB_CI",
  "CIRCLECI",
])
const cleanEnv = Object.fromEntries(
  Object.entries(process.env).filter(([key]) => !COLOR_ENV.has(key))
)

const execThenEqual = (cmd, expected) => (done) =>
  exec(cmd, (_, actual) => done(equal(actual, expected)))

const supportThenEqual = (env, setup, expected) => (done) => {
  const script = [
    setup,
    `import(${JSON.stringify(INDEX)})`,
    `.then(({ isColorSupported }) => process.stdout.write(String(isColorSupported)))`,
  ].join("")

  execFile(
    process.execPath,
    ["--input-type=module", "-e", script],
    { env: { ...cleanEnv, ...env } },
    (error, actual) => done(equal(error ? error.message : actual.trim(), expected))
  )
}

const ttySetup = [
  `Object.defineProperty(process, "platform", { value: "linux" });`,
  `import tty from "tty";`,
  `import module from "module";`,
  `tty.isatty = () => true;`,
  `module.syncBuiltinESMExports();`,
].join(" ")
const windowsSetup = `Object.defineProperty(process, "platform", { value: "win32" });`

export default [
  t("environment", [
    t("`FORCE_COLOR` forces color", [
      execThenEqual(`FORCE_COLOR= ${BIN}`, "\x1b[34mfoo\x1b[39m\n"),
    ]),
    t("`FORCE_COLOR=0` disables color", [
      supportThenEqual({ FORCE_COLOR: "0", TERM: "dumb" }, "", "false"),
      supportThenEqual({ FORCE_COLOR: "0", TERM: "xterm" }, ttySetup, "false"),
      supportThenEqual(
        { FORCE_COLOR: "0", TERM: "xterm" },
        windowsSetup,
        "false"
      ),
      supportThenEqual(
        { FORCE_COLOR: "0", TERM: "dumb" },
        `process.argv.push("--color");`,
        "false"
      ),
    ]),
    t("empty and other present `FORCE_COLOR` values still force color", [
      supportThenEqual({ FORCE_COLOR: "", TERM: "dumb" }, "", "true"),
      supportThenEqual({ FORCE_COLOR: "false", TERM: "dumb" }, "", "true"),
    ]),
    t("TTY color detection remains supported", [
      supportThenEqual({ TERM: "xterm" }, ttySetup, "true"),
    ]),
    t("`NO_COLOR` still overrides `FORCE_COLOR`", [
      supportThenEqual(
        { NO_COLOR: "", FORCE_COLOR: "1", TERM: "dumb" },
        "",
        "false"
      ),
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
