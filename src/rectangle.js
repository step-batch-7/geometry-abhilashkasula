const Line = require("./line");

class Rectangle {
  constructor(diagonalPoint1, diagonalPoint2) {
    this.diagonal = new Line(diagonalPoint1, diagonalPoint2);
  }

  toString() {
    const { endA, endB } = this.diagonal;
    return `[Rectangle (${endA.x},${endA.y}) to (${endB.x},${endB.y})]`;
  }

  isEqualTo(otherRectangle) {
    if (!(otherRectangle instanceof Rectangle)) return false;
    return this.diagonal.isEqualTo(otherRectangle.diagonal);
  }
}
module.exports = Rectangle;
