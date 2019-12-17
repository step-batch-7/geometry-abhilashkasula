const { assert } = require("chai");
const Rectangle = require("../src/rectangle");

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
});