import * as c from "../index.js"
import { t, equal } from "twist"

export default [
  t("colorette", [
    t("options.enabled toggle color on/off", [
      (done) => {
        c.options.enabled = false
        done(equal(c.bold("megazord"), "megazord"))
        c.options.enabled = true
      },
    ]),
  ]),
]
