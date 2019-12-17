const Line = require("./line");

const getSides = diagonal => {
  const { endA, endB } = diagonal;
  const side1 = new Line(diagonal.endA, { x: endA.x, y: endB.y });
  const side2 = new Line(diagonal.endB, { x: endB.x, y: endA.y });
  return [side1, side2];
};

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

  get area() {
    const [side1, side2] = getSides(this.diagonal);
    return side1.length * side2.length;
  }
}
module.exports = Rectangle;
