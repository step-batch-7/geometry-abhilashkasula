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
    it("should determine true for line ends are same", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 4, y: 5 });
      const line2 = new Line({ x: 1, y: 2 }, { x: 4, y: 5 });
      assert.isOk(line1.isEqualTo(line2));
    });
    it("should determine false for line ends are not same", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 5 });
      const line2 = new Line({ x: 1, y: 2 }, { x: 4, y: 5 });
      assert.isNotOk(line1.isEqualTo(line2));
    });
  });
});
