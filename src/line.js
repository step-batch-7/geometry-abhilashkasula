class Line {
  constructor(endA, endB) {
    this.endA = { x: endA.x, y: endA.y };
    this.endB = { x: endB.x, y: endB.y };
  }
  toString() {
    const { endA, endB } = this;
    return `Line (${endA.x},${endA.y}),(${endB.x},${endB.y}).`;
  }
}

module.exports = Line;
