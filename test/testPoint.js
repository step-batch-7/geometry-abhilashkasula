const { assert } = require("chai");
const Point = require("../src/point");
const Line = require("../src/line");

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
    it("should determine false for two points are not same but instances", function() {
      const point1 = new Point(2, 3);
      const point2 = new Point(4, 5);
      assert.isNotOk(point1.isEqualTo(point2));
    });
    it("should determine false for two points are same but not instances", function() {
      const point1 = new Point(2, 3);
      const point2 = { x: 2, y: 3 };
      assert.isNotOk(point1.isEqualTo(point2));
    });
  });

  describe("clone", function() {
    it("should give a copy of point for positive coordinates", function() {
      const point = new Point(2, 3);
      assert.deepStrictEqual(point.clone(), point);
    });
    it("should give a copy of point for negative coordinates", function() {
      const point = new Point(2, -3);
      assert.deepStrictEqual(point.clone(), point);
    });
    it("should give a copy of point for positive coordinates", function() {
      const point = new Point(-2, -3);
      assert.deepStrictEqual(point.clone(), point);
    });
  });

  describe("findDistanceTo", function() {
    it("should give the distance between two points for the point given is an instance of Point", function() {
      const point1 = new Point(2, 2);
      const point2 = new Point(7, 2);
      assert.strictEqual(point1.findDistanceTo(point2), 5);
    });
    it("should give NaN two points given for the point given is not instances of Point", function() {
      const point1 = new Point(2, 2);
      const point2 = { x: 7, y: 2 };
      assert.isNaN(point1.findDistanceTo(point2));
    });
    it("should give zero for the points given are equal", () => {
      const point = new Point(2, 3);
      assert.strictEqual(point.findDistanceTo(point), 0);
    });
  });

  describe("isOn", function() {
    it("should determine true for the point is on the line", function() {
      const line = new Line({ x: 4, y: 4 }, { x: 8, y: 8 });
      const point = new Point(6, 6);
      assert.isOk(point.isOn(line));
    });
  });
});
