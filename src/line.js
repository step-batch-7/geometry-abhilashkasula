const areCoordinatesEqual = (line1End, line2End) => {
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
  isEqualTo(line) {
    const { endA, endB } = line;
    const isInstanceLine = line instanceof Line;
    const areEndsEqual =
      areCoordinatesEqual(this.endA, endA) &&
      areCoordinatesEqual(this.endB, endB);
    return isInstanceLine && areEndsEqual;
  }
}

module.exports = Line;
