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
    const distance = Math.sqrt(
      Math.pow(endB.x - endA.x, 2) + Math.pow(endB.y - endA.y, 2)
    );
    return distance;
  }
}

module.exports = Line;
