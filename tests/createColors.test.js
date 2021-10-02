import { blue, createColors } from "../index.js"
import { t, equal } from "twist"

export default [
  t("colorette", [
    t("createColors", [
      t("useColor overrides automatic color detection", [
        (done) => {
          done([
            equal(
              blue("megazord"),
              createColors({ useColor: true }).blue("megazord")
            ),
            equal(
              "megazord",
              createColors({ useColor: false }).blue("megazord")
            ),
          ])
        },
      ]),
    ]),
  ]),
]
