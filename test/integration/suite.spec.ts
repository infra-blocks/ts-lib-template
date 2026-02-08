import test, { type TestContextHookFn } from "node:test";
import { expect } from "@infra-blocks/test";

function setUp() {
  console.log("setting up");
  return Promise.resolve(undefined);
}

function tearDown(): TestContextHookFn {
  return () => {
    console.log("tearing down");
  };
}

test("suite", async (t) => {
  await setUp();
  t.after(tearDown());

  await t.test("dummy smoke tests", async (t) => {
    await t.test("should work yo", () => {
      expect(true).to.be.true;
    });
  });
});
