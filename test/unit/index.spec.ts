import { expect } from "@infra-blocks/test";
import { testMe } from "../../src/index.js";

describe("index", () => {
  describe(testMe.name, () => {
    it("should return the right stuff", () => {
      expect(testMe()).to.equal("you tested me all right!");
    });
  });
});
