import { suite, test } from "node:test";
import { assert } from "@infra-blocks/test";
import { libFunction } from "../../src/index.js";

suite("suite", () => {
  test("dummy", () => {
    assert(typeof libFunction() === "string");
  });
});
