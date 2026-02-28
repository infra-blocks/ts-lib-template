import { suite, test } from "node:test";
import { expect } from "@infra-blocks/test";

suite("suite", () => {
  test("dummy", () => {
    expect(true).to.be.true;
  });
});
