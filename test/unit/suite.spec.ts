import test from "node:test";
import { expect } from "@infra-blocks/test";

test("suite", async (t) => {
  await t.test("dummy", () => {
    expect(true).to.be.true;
  });
});
