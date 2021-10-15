import { blue, createColors } from "../index.js"
import { t, equal } from "twist"

export default [
  t("colorette", [
    t("createColors", [
      t("useColor overrides automatic color detection", [
        (done) => {
          done([
            equal(blue("foo"), createColors({ useColor: true }).blue("foo")),
            equal("foo", createColors({ useColor: false }).blue("foo")),
            equal("42", createColors({ useColor: false }).blue(42)),
          ])
        },
      ]),
    ]),
  ]),
]
