const { assert } = require("chai");
const Point = require("../src/point");

describe("Point", function() {
  describe("toString", function() {
    it("should give a string representation of point", function() {
      const point = new Point(2, 3);
      assert.strictEqual(point.toString(), `[Point @(2,3)]`);
    });
  });

  describe("visit", function() {
    it("should give the sum of coordinates of the point for function reference sum", function() {
      const point = new Point(2, 3);
      assert.strictEqual(
        point.visit((x, y) => x + y),
        5
      );
    });
    it("should give the product of coordinates of the point for function reference product", function() {
      const point = new Point(2, 3);
      assert.strictEqual(
        point.visit((x, y) => x * y),
        6
      );
    });
    it("should give the difference of coordinates of the point for function reference subtract", function() {
      const point = new Point(3, 2);
      assert.strictEqual(
        point.visit((x, y) => x - y),
        1
      );
    });
  });

  describe("isEqualTo", function() {
    it("should determine true for two points are at same position", function() {
      const point1 = new Point(2, 3);
      assert.isOk(point1.isEqualTo(point1));
    });
  });
});
