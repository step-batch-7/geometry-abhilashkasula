class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    Object.freeze(this);
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

  clone() {
    return new Point(this.x, this.y);
  }

  findDistanceTo(otherPoint) {
    if (!(otherPoint instanceof Point)) return NaN;
    const diffOfXCoordinates = otherPoint.x - this.x;
    const diffOfYCoordinates = otherPoint.y - this.y;
    return Math.hypot(diffOfXCoordinates, diffOfYCoordinates);
  }

  isOn(shape) {
    return shape.hasPoint(this);
  }
}

module.exports = Point;
