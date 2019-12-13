const areCoordinatesEqual = (line1, line2) => {
  const areXCoordinatesEqual = line1.x == line2.x;
  const areYCoordinatesEqual = line1.y == line2.y;
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
  isEqualTo(line) {
    const { endA, endB } = line;
    const isInstanceLine = line instanceof Line;
    return (
      isInstanceLine &&
      areCoordinatesEqual(this.endA, endA) &&
      areCoordinatesEqual(this.endB, endB)
    );
  }
}

module.exports = Line;
