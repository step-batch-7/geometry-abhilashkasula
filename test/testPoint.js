const { assert } = require("chai");
const Point = require("../src/point");

describe("Point", function() {
  describe("toString", function() {
    it("should give a string representation of point", function() {
      const point = new Point(2, 3);
      assert.strictEqual(point.toString(), `[Point @(2,3)]`);
    });
  });
});
