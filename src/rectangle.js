const Line = require("./line");
const Point = require("./point");

const getSides = diagonal => {
  const { endA, endB } = diagonal;
  const side1 = new Line(endA, { x: endA.x, y: endB.y });
  const side2 = new Line({ x: endA.x, y: endB.y }, endB);
  const side3 = new Line(endB, { x: endB.x, y: endA.y });
  const side4 = new Line({ x: endB.x, y: endA.y }, endA);
  return [side1, side2, side3, side4];
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
    const { endA, endB } = otherRectangle.diagonal;
    const otherDiagonal = new Line(
      { x: endA.x, y: endB.y },
      { x: endB.x, y: endA.y }
    );
    return (
      this.diagonal.isEqualTo(otherRectangle.diagonal) ||
      this.diagonal.isEqualTo(otherDiagonal)
    );
  }

  get area() {
    const [side1, side2] = getSides(this.diagonal);
    return side1.length * side2.length;
  }

  get perimeter() {
    const [side1, side2] = getSides(this.diagonal);
    return side1.length * 2 + side2.length * 2;
  }

  hasPoint(point) {
    if (!(point instanceof Point)) return false;
    const sides = getSides(this.diagonal);
    return sides.some(side => side.hasPoint(point));
  }
}
module.exports = Rectangle;
