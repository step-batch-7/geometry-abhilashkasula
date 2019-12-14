class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return `[Point @(${this.x},${this.y})]`;
  }
  visit(operation) {
    return operation(this.x, this.y);
  }

  isEqualTo(other) {
    const { x, y } = other;
    if (!(other instanceof Point)) return false;
    return x == this.x && y == this.y;
  }
}

module.exports = Point;
