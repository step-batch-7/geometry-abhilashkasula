const { assert } = require("chai");
const Line = require("../src/line");

describe("toString", function() {
  it("should give a string representation of line", function() {
    const line1 = new Line({ x: 1, y: 2 }, { x: 4, y: 5 });
    assert.strictEqual(line1.toString(), `Line (1,2),(4,5).`);
  });
});
