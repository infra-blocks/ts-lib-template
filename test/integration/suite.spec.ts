import { after, suite, test } from "node:test";
import { assert } from "@infra-blocks/test";

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
      assert(await Promise.resolve(true));
    });
  });
});
