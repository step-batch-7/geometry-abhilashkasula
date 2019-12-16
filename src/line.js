const Point = require("./point");

const isNotInRange = (range, coordinate) => {
  const min = Math.min(range[0], range[1]);
  const max = Math.max(range[0], range[1]);
  return coordinate > max || coordinate < min;
};

const arePointsCollinear = (point1, point2, point3) => {
  return (
    point1.x * (point2.y - point3.y) +
      point2.x * (point3.y - point1.y) +
      point3.x * (point1.y - point2.y) ==
    0
  );
};

const getCoordinate = (ratio, coordinate1, coordinate2) => {
  return (1 - ratio) * coordinate1 + ratio * coordinate2;
};

class Line {
  constructor(endA, endB) {
    this.endA = new Point(endA.x, endA.y);
    this.endB = new Point(endB.x, endB.y);
  }

  toString() {
    const { endA, endB } = this;
    return `[Line (${endA.x},${endA.y}) to (${endB.x},${endB.y})]`;
  }

  isEqualTo(other) {
    const { endA, endB } = other;
    if (!(other instanceof Line)) return false;
    return this.endA.isEqualTo(endA) && this.endB.isEqualTo(endB);
  }

  get length() {
    const { endA, endB } = this;
    const diffOfXCoordinates = endB.x - endA.x;
    const diffOfYCoordinates = endB.y - endA.y;
    return Math.hypot(diffOfXCoordinates, diffOfYCoordinates);
  }

  get slope() {
    const { endA, endB } = this;
    const diffOfYCoordinates = endB.y - endA.y;
    const diffOfXCoordinates = endB.x - endA.x;
    return diffOfYCoordinates / diffOfXCoordinates;
  }

  isParallelTo(other) {
    if (!(other instanceof Line)) return false;
    return (
      !arePointsCollinear(this.endA, other.endA, this.endB) &&
      this.slope === other.slope
    );
  }

  findX(yCoordinate) {
    const { endA, endB } = this;
    if (isNotInRange([endA.y, endB.y], yCoordinate)) return NaN;
    if (endA.y == endB.y) return endA.x;
    const diffOfYCoordinates = yCoordinate - endA.y;
    const product = this.slope * endA.x;
    return (diffOfYCoordinates + product) / this.slope;
  }

  findY(xCoordinate) {
    const { endA, endB } = this;
    if (isNotInRange([endA.x, endB.x], xCoordinate)) return NaN;
    if (endA.x == endB.x) return endA.y;
    const diffOfXCoordinates = xCoordinate - endA.x;
    const product = this.slope * diffOfXCoordinates;
    return product + endA.y;
  }

  split() {
    const { endA, endB } = this;
    const midPoint = { x: (endA.x + endB.x) / 2, y: (endA.y + endB.y) / 2 };
    return [new Line(endA, midPoint), new Line(midPoint, endB)];
  }

  hasPoint(point) {
    if (!(point instanceof Point)) return false;
    return point.x == this.findX(point.y) || point.y == this.findY(point.x);
  }

  findPointFromStart(distance) {
    const ratio = distance / this.length;
    if (isNotInRange([0, 1], ratio)) return null;
    const x = getCoordinate(ratio, this.endA.x, this.endB.x);
    const y = getCoordinate(ratio, this.endA.y, this.endB.y);
    return new Point(x, y);
  }

  findPointFromEnd(distance) {
    return this.findPointFromStart(this.length - distance);
  }
}

module.exports = Line;
