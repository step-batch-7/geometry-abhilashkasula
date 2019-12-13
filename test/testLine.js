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
      assert.approximately(line1.length, 7.21, 0.3);
    });
    it("should give the zero for the line having same points", function() {
      const line1 = new Line({ x: 3, y: 2 }, { x: 3, y: 2 });
      assert.strictEqual(line1.length, 0);
    });
  });

  describe("isParallelTo", function() {
    it("should determine true for lines parallel when coordinates are positive", function() {
      const line1 = new Line({ x: 0, y: 0 }, { x: 0, y: 4 });
      const line2 = new Line({ x: 4, y: 0 }, { x: 4, y: 4 });
      assert.isOk(line1.isParallelTo(line2));
    });
    it("should determine true for lines parallel when coordinates are negative", function() {
      const line1 = new Line({ x: 0, y: -2 }, { x: 0, y: 4 });
      const line2 = new Line({ x: 4, y: -2 }, { x: 4, y: 4 });
      assert.isOk(line1.isParallelTo(line2));
    });
    it("should determine false for lines not parallel when coordinates are positive.", function() {
      const line1 = new Line({ x: 0, y: 0 }, { x: 0, y: 4 });
      const line2 = new Line({ x: 1, y: 2 }, { x: 3, y: 3 });
      assert.isNotOk(line1.isParallelTo(line2));
    });
    it("should determine false for lines parallel when coordinates are negative", function() {
      const line1 = new Line({ x: 0, y: -2 }, { x: -1, y: 4 });
      const line2 = new Line({ x: 4, y: -2 }, { x: 4, y: 4 });
      assert.isNotOk(line1.isParallelTo(line2));
    });
    it("should determine false for lines having same coordinates.", function() {
      const line1 = new Line({ x: 0, y: -2 }, { x: -1, y: 4 });
      assert.isNotOk(line1.isParallelTo(line1));
    });
  });

  describe("slope", function() {
    it("should give slope of a line for positive coordinates", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 3 });
      assert.strictEqual(line1.slope, 0.5);
    });
    it("should give slope of a line for negative coordinates", function() {
      const line1 = new Line({ x: -1, y: -2 }, { x: 3, y: 3 });
      assert.strictEqual(line1.slope, 1.25);
    });
  });
});
