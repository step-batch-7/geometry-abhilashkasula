const arePointsEqual = (line1End, line2End) => {
  const areXCoordinatesEqual = line1End.x == line2End.x;
  const areYCoordinatesEqual = line1End.y == line2End.y;
  return areXCoordinatesEqual && areYCoordinatesEqual;
};

const slopeOfLine = (endA, endB) => {
  const diffOfYCoordinates = endB.y - endA.y;
  const diffOfXCoordinates = endB.x - endA.x;
  return diffOfYCoordinates / diffOfXCoordinates;
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
    const distance = Math.sqrt(
      Math.pow(endB.x - endA.x, 2) + Math.pow(endB.y - endA.y, 2)
    );
    return distance;
  }

  isParallelTo(other) {
    const { endA, endB } = other;
    const slopeOfLine1 = slopeOfLine(this.endA, this.endB);
    const slopeOfLine2 = slopeOfLine(endA, endB);
    return slopeOfLine1 == slopeOfLine2;
  }
}

module.exports = Line;
