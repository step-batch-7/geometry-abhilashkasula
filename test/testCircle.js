const { assert } = require("chai");
const Circle = require("../src/circle");
const Point = require("../src/point");

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

  describe("perimeter", function() {
    it("should give zero for the radius zero", function() {
      const circle = new Circle({ x: 1, y: 2 }, 0);
      assert.strictEqual(circle.perimeter, 0);
    });
    it("should give perimeter of the circle for the radius given", function() {
      const circle = new Circle({ x: 1, y: 2 }, 2);
      assert.approximately(circle.perimeter, 12.5, 0.1);
    });
  });

  describe("hasPoint", function() {
    it("should determine true for the given point is on the circle and instance is Point", function() {
      const circle = new Circle({ x: 5, y: 5 }, 2);
      const point = new Point(5, 3);
      assert.isOk(circle.hasPoint(point));
    });
    it("should determine false for the given point is on the circle but instance is not Point", function() {
      const circle = new Circle({ x: 5, y: 5 }, 2);
      const point = { x: 5, y: 3 };
      assert.isNotOk(circle.hasPoint(point));
    });
    it("should determine false for the given point is not on the circle but instance is Point", function() {
      const circle = new Circle({ x: 5, y: 5 }, 2);
      const point = new Point(5, 4);
      assert.isNotOk(circle.hasPoint(point));
    });
  });

  describe("moveTo", function() {
    it("should give the circle with same centre for the same centre given as the circle centre", function() {
      const circle = new Circle({ x: 5, y: 5 }, 2);
      assert.isTrue(circle.moveTo({ x: 5, y: 5 }).isEqualTo(circle));
    });
    it("should give the circle with same radius and new centre for the given point", () => {
      const circle = new Circle({ x: 5, y: 5 }, 2);
      const circle2 = new Circle({ x: 1, y: 2 }, 2);
      assert.isTrue(circle.moveTo({ x: 1, y: 2 }).isEqualTo(circle2));
    });
  });

  describe("covers", function() {
    it("should determine false for the point on the circumference", function() {
      const circle = new Circle({ x: 5, y: 5 }, 2);
      const point = new Point(5, 3);
      assert.isFalse(circle.covers(point));
    });
  });
});
