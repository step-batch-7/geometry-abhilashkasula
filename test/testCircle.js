const { assert } = require("chai");
const Circle = require("../src/circle");

describe("Circle", function() {
  describe("toString", function() {
    it("should give string representation of circle", function() {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      assert.strictEqual(circle.toString(), `[Circle @(1,2) radius 5]`);
    });
  });
  describe("isEqualTo", function() {
    it("should determine true for the given circle is equal as well as it is an instance of Circle", function() {
      const circle1 = new Circle({ x: 1, y: 2 }, 5);
      const circle2 = new Circle({ x: 1, y: 2 }, 5);
      assert.isOk(circle1.isEqualTo(circle2));
    });
  });
});
