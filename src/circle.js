const Point = require("./point");

class Circle {
  constructor(centre, radius) {
    this.centre = new Point(centre.x, centre.y);
    this.radius = radius;
  }

  toString() {
    return `[Circle @(${this.centre.x},${this.centre.y}) radius ${this.radius}]`;
  }

  isEqualTo(otherCircle) {
    return (
      otherCircle instanceof Circle && this.centre.isEqualTo(otherCircle.centre)
    );
  }
}

module.exports = Circle;
