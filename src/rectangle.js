class Rectangle {
  constructor(diagonalPoint1, diagonalPoint2) {
    this.endA = { x: diagonalPoint1.x, y: diagonalPoint1.y };
    this.endB = { x: diagonalPoint2.x, y: diagonalPoint2.y };
  }

  toString() {
    return `[Rectangle (${this.endA.x},${this.endA.y}) to (${this.endB.x},${this.endB.y})]`;
  }
}

module.exports = Rectangle;
