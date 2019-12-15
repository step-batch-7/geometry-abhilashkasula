const Point = require("./point");

const arePointsEqual = (line1End, line2End) => {
  const areXCoordinatesEqual = line1End.x == line2End.x;
  const areYCoordinatesEqual = line1End.y == line2End.y;
  return areXCoordinatesEqual && areYCoordinatesEqual;
};

const splitAt = (endA, endB) => {
  return { x: (endA.x + endB.x) / 2, y: (endA.y + endB.y) / 2 };
};

const isPointNotInRange = (range, coordinate) => {
  const min = Math.min(range[0], range[1]);
  const max = Math.max(range[0], range[1]);
  return coordinate > max || coordinate < min;
};

class Line {
  constructor(endA, endB) {
    this.endA = { x: endA.x, y: endA.y };
    this.endB = { x: endB.x, y: endB.y };
  }

  toString() {
    const { endA, endB } = this;
    return `[Line (${endA.x},${endA.y}) to (${endB.x},${endB.y})]`;
  }

  isEqualTo(other) {
    const { endA, endB } = other;
    if (!(other instanceof Line)) return false;
    return arePointsEqual(this.endA, endA) && arePointsEqual(this.endB, endB);
  }

  get length() {
    const { endA, endB } = this;
    const sumOfSquaresOfDiff =
      Math.pow(endB.x - endA.x, 2) + Math.pow(endB.y - endA.y, 2);
    return Math.sqrt(sumOfSquaresOfDiff);
  }

  get slope() {
    const { endA, endB } = this;
    const diffOfYCoordinates = endB.y - endA.y;
    const diffOfXCoordinates = endB.x - endA.x;
    return diffOfYCoordinates / diffOfXCoordinates;
  }

  isParallelTo(other) {
    if (!(other instanceof Line)) return false;
    const areLinesOverlapping =
      this.hasPoint(new Point(other.endA.x, other.endA.y)) ||
      this.hasPoint(new Point(other.endB.x, other.endB.y));
    return !areLinesOverlapping && this.slope == other.slope;
  }

  findX(yCoordinate) {
    const { endA, endB } = this;
    if (isPointNotInRange([endA.y, endB.y], yCoordinate)) return NaN;
    if (endA.y == endB.y || endA.x == endB.x) return endA.x;
    const diffOfYCoordinates = yCoordinate - endA.y;
    const product = this.slope * endA.x;
    return (diffOfYCoordinates + product) / this.slope;
  }

  findY(xCoordinate) {
    const { endA, endB } = this;
    if (isPointNotInRange([endA.x, endB.x], xCoordinate)) return NaN;
    if (endA.x == endB.x || endA.y == endB.y) return endA.y;
    const diffOfXCoordinates = xCoordinate - endA.x;
    const product = this.slope * diffOfXCoordinates;
    return product + endA.y;
  }

  split() {
    const { endA, endB } = this;
    const splitLineAt = splitAt(endA, endB);
    return [new Line(endA, splitLineAt), new Line(splitLineAt, endB)];
  }

  hasPoint(point) {
    const isXorYEqual =
      point.y == this.findY(point.x) || point.x == this.findX(point.y);
    return point instanceof Point && isXorYEqual;
  }
}

module.exports = Line;
