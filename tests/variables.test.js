import { exec } from "child_process"
import { fileURLToPath } from "url"
import { dirname } from "path"
import { t, equal } from "twist"

const SCRIPTS_PATH = `${dirname(fileURLToPath(import.meta.url))}/scripts`

const exitStatusSuccess = (done) => (error) => done(equal(error, null))

const sh = (file, assert) => (done) => exec(`sh ${file}`, assert(done))

export default [
  t("variables", [
    t("`FORCE_COLOR` forces color", [
      sh(`${SCRIPTS_PATH}/FORCE_COLOR.sh`, exitStatusSuccess),
    ]),
    t("`NO_COLOR` disables color", [
      sh(`${SCRIPTS_PATH}/NO_COLOR.sh`, exitStatusSuccess),
    ]),
  ]),
]
