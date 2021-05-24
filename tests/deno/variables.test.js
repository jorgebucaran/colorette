import { dirname, fromFileUrl } from "https://deno.land/std@0.97.0/path/mod.ts";
import { assert } from "https://deno.land/std@0.97.0/testing/asserts.ts";

const SCRIPTS_PATH = `${dirname(fromFileUrl(import.meta.url))}/scripts`;

Deno.test("`FORCE_COLOR` forces color", async () => {
  const p = Deno.run({
    cmd: ["sh", `${SCRIPTS_PATH}/FORCE_COLOR.sh`],
  });
  const {success} = await p.status();
  assert(success);
  Deno.close(p.rid);
})

Deno.test("`NO_COLOR` disables color", async () => {
  const p = Deno.run({
    cmd: ["sh", `${SCRIPTS_PATH}/NO_COLOR.sh`],
  });
  const {success} = await p.status();
  assert(success);
  Deno.close(p.rid);
})