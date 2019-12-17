const { assert } = require("chai");
const Rectangle = require("../src/rectangle");
const Point = require("../src/point");

describe("Rectangle", () => {
  describe("toString", function() {
    it("should give string representation of Rectangle", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      assert.equal(rectangle.toString(), `[Rectangle (1,1) to (5,4)]`);
    });
  });

  describe("isEqualTo", function() {
    it("should determine true for references of both rectangles are same", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      assert.isTrue(rectangle.isEqualTo(rectangle));
    });
    it("should determine true for given diagonal is equal as well as is instance of Rectangle", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const rectangle2 = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      assert.isTrue(rectangle.isEqualTo(rectangle2));
    });
    it("should determine false for given diagonal is not equal but is instance of Rectangle", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const rectangle2 = new Rectangle({ x: 1, y: 2 }, { x: 5, y: 3 });
      assert.isFalse(rectangle.isEqualTo(rectangle2));
    });
    it("should determine false for given diagonal is equal but is not instance of Rectangle", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const rectangle2 = {
        diagonal: { endA: { x: 1, y: 1 }, endB: { x: 5, y: 4 } }
      };
      assert.isFalse(rectangle.isEqualTo(rectangle2));
    });
    it("should determine false for given diagonal empty object", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const rectangle2 = {};
      assert.isFalse(rectangle.isEqualTo(rectangle2));
    });
  });

  describe("area", function() {
    it("should give zero for diagonal length is zero", function() {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 0, y: 0 });
      assert.strictEqual(rectangle.area, 0);
    });
    it("should give area for diagonal length is greater than zero", function() {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 7, y: 7 });
      assert.strictEqual(rectangle.area, 49);
    });
    it("should give zero for breadth is zero", function() {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 0, y: 5 });
      assert.strictEqual(rectangle.area, 0);
    });
    it("should give zero for length is zero", function() {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 5, y: 0 });
      assert.strictEqual(rectangle.area, 0);
    });
  });

  describe("perimeter", function() {
    it("should give zero for diagonal length is zero", function() {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 0, y: 0 });
      assert.strictEqual(rectangle.perimeter, 0);
    });
    it("should give perimeter for diagonal length is greater than zero", function() {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 5, y: 5 });
      assert.strictEqual(rectangle.perimeter, 20);
    });
    it("should give perimeter as two time of length for breadth is zero", function() {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 0, y: 5 });
      assert.strictEqual(rectangle.perimeter, 10);
    });
    it("should give perimeter as two time of breadth for length is zero", function() {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 5, y: 0 });
      assert.strictEqual(rectangle.perimeter, 10);
    });
  });

  describe("hasPoint", function() {
    it("should determine true for the point on the left line", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const point = new Point(5, 4);
      assert.isTrue(rectangle.hasPoint(point));
    });
    it("should determine true for the point on the right line", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const point = new Point(1, 4);
      assert.isTrue(rectangle.hasPoint(point));
    });
    it("should determine true for the point on the top line", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const point = new Point(4, 4);
      assert.isTrue(rectangle.hasPoint(point));
    });
    it("should determine true for the point on the bottom line", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const point = new Point(1, 3);
      assert.isTrue(rectangle.hasPoint(point));
    });
    it("should determine false for the given point is not an instance of Point", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const point = { x: 5, y: 4 };
      assert.isFalse(rectangle.hasPoint(point));
    });
    it("should determine false for the given point is not on any of lines of rectangles", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const point = { x: 2, y: 3 };
      assert.isFalse(rectangle.hasPoint(point));
    });
  });
});
