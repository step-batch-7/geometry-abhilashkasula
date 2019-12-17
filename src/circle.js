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
      otherCircle instanceof Circle &&
      this.centre.isEqualTo(otherCircle.centre) &&
      this.radius == otherCircle.radius
    );
  }

  get area() {
    return Math.PI * this.radius * this.radius;
  }

  get perimeter() {
    return 2 * Math.PI * this.radius;
  }

  hasPoint(point) {
    if (!(point instanceof Point)) return false;
    const sqrOfDiffOfxCoordinates = Math.pow(point.x - this.centre.x, 2);
    const sqrOfDiffOfyCoordinates = Math.pow(point.y - this.centre.y, 2);
    return (
      Math.sqrt(sqrOfDiffOfxCoordinates + sqrOfDiffOfyCoordinates) ==
      this.radius
    );
  }

  moveTo(newCentre) {
    return new Circle(Object.assign({}, newCentre), this.radius);
  }

  covers(point) {
    if (!(point instanceof Point)) return false;
    return this.centre.findDistanceTo(point) < this.radius;
  }
}

module.exports = Circle;
