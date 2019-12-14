const arePointsEqual = (line1End, line2End) => {
  const areXCoordinatesEqual = line1End.x == line2End.x;
  const areYCoordinatesEqual = line1End.y == line2End.y;
  return areXCoordinatesEqual && areYCoordinatesEqual;
};

class Line {
  constructor(endA, endB) {
    this.endA = { x: endA.x, y: endA.y };
    this.endB = { x: endB.x, y: endB.y };
  }

  toString() {
    const { endA, endB } = this;
    return `Line (${endA.x},${endA.y}),(${endB.x},${endB.y}).`;
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
    if (!(other instanceof Line) || this.isEqualTo(other)) return false;
    const slopeOfLine1 = this.slope;
    const slopeOfLine2 = other.slope;
    return slopeOfLine1 == slopeOfLine2;
  }

  findX(yCoordinate) {
    const { endA, endB } = this;
    const min = Math.min(endA.y, endB.y);
    const max = Math.max(endA.y, endB.y);
    if (yCoordinate < min || yCoordinate > max) return NaN;
    const diffOfYCoordinates = yCoordinate - endA.y;
    const product = this.slope * endA.x;
    return (diffOfYCoordinates + product) / this.slope;
  }

  findY(xCoordinate) {
    const { endA, endB } = this;
    const min = Math.min(endA.x, endB.x);
    const max = Math.max(endA.x, endB.x);
    if (xCoordinate < min || xCoordinate > max) return NaN;
    const diffOfXCoordinates = xCoordinate - endA.x;
    const product = this.slope * diffOfXCoordinates;
    return product + endA.y;
  }
}

module.exports = Line;
