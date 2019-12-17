const { assert } = require("chai");
const Rectangle = require("../src/rectangle");

describe("Rectangle", () => {
  describe("toString", function() {
    it("should give string representation of Rectangle", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      assert.equal(rectangle.toString(), `[Rectangle (1,1) to (5,4)]`);
    });
  });
});
