import { after, suite, test } from "node:test";
import { expect } from "@infra-blocks/test";

function setUp() {
  console.log("setting up");
  return Promise.resolve(undefined);
}

function tearDown() {
  return () => {
    console.log("tearing down");
  };
}

suite("suite", async () => {
  await setUp();
  after(tearDown());

  suite("dummy smoke tests", () => {
    test("should work yo", async () => {
      await expect(Promise.resolve(true)).to.eventually.be.true;
    });
  });
});
