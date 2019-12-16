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
    it("should determine false for the given circle radius is not equal but it's instance and centre are equal", function() {
      const circle1 = new Circle({ x: 1, y: 2 }, 3);
      const circle2 = new Circle({ x: 1, y: 2 }, 5);
      assert.isNotOk(circle1.isEqualTo(circle2));
    });
    it("should determine false for the given circle centre is not equal but it's instance and radius are equal", function() {
      const circle1 = new Circle({ x: 2, y: 2 }, 5);
      const circle2 = new Circle({ x: 1, y: 2 }, 5);
      assert.isNotOk(circle1.isEqualTo(circle2));
    });
    it("should determine false for the given circle centre is not an instance of Circle but it's centre and radius are equal", function() {
      const circle1 = new Circle({ x: 2, y: 2 }, 5);
      const circle2 = { centre: { x: 1, y: 2 }, radius: 5 };
      assert.isNotOk(circle1.isEqualTo(circle2));
    });
  });

  describe("area", function() {
    it("should give zero for the radius zero", function() {
      const circle = new Circle({ x: 1, y: 2 }, 0);
      assert.strictEqual(circle.area, 0);
    });
    it("should give area of the circle for the radius given", function() {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      assert.approximately(circle.area, 78.5, 0.1);
    });
  });
});
