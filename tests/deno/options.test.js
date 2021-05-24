import * as c from "../../index.js";
import { assertEquals } from "https://deno.land/std@0.97.0/testing/asserts.ts";

Deno.test("options.enabled toggle color on/off", () => {
  c.options.enabled = false;
  assertEquals(c.bold("megazord"), "megazord");
  c.options.enabled = true;
});
