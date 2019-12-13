const { assert } = require("chai");
const Line = require("../src/line");

describe("Line", function() {
  describe("toString", function() {
    it("should give a string representation of line", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 4, y: 5 });
      assert.strictEqual(line1.toString(), `Line (1,2),(4,5).`);
    });
  });

  describe("isEqualTo", function() {
    it("should determine true for two line ends and instances are same", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 4, y: 5 });
      const line2 = new Line({ x: 1, y: 2 }, { x: 4, y: 5 });
      assert.isOk(line1.isEqualTo(line2));
    });
    it("should determine false for two line ends are not same but instances", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 5 });
      const line2 = new Line({ x: 1, y: 2 }, { x: 4, y: 5 });
      assert.isNotOk(line1.isEqualTo(line2));
    });
    it("should determine false for two line ends are same but not instances", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 4, y: 5 });
      const line2 = { endA: { x: 1, y: 2 }, endB: { x: 4, y: 5 } };
      assert.isNotOk(line1.isEqualTo(line2));
    });
    it("should determine false for two line ends and instances are not same", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 5 });
      const line2 = { endA: { x: 1, y: 2 }, endB: { x: 4, y: 5 } };
      assert.isNotOk(line1.isEqualTo(line2));
    });
  });

  describe("length", function() {
    it("should give the length of the line for positive coordinates", function() {
      const line1 = new Line({ x: 3, y: 2 }, { x: 7, y: 8 });
      assert.isAtLeast(line1.length, 7.21);
    });
  });
});
