import { createColors } from "../index.js"
import { t, equal } from "twist"

export default [
  t("colorette", [
    t("createColors", [
      t("useColor overrides automatic color detection", [
        equal(
          `\x1b[34mblue\x1b[39m`,
          createColors({ useColor: true }).blue("blue")
        ),
        equal("nope", createColors({ useColor: false }).blue("nope")),
        equal("42", createColors({ useColor: false }).blue(42)),
      ]),
    ]),
  ]),
]
