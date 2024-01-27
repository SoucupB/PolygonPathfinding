let lineIndex = 0;

class Line {
  constructor(pointA, pointB, id = 0) {
    this.pointA = pointA;
    this.pointB = pointB;
    this.id = lineIndex++;
  }

  jointPoints(line) {
    let points = [];
    let pointALine = [this.pointA, this.pointB];
    let pointBLine = [line.pointA, line.pointB];
    for(let i = 0; i < 2; i++) {
      for(let j = 0; j < 2; j++) {
        if(pointALine[i].arePointsEqual(pointBLine[j])) {
          points.push(pointALine[i]);
        }
      }
    }
    return points;
  }

  areLinesEqual(lineA) {
    return this.jointPoints(lineA).length == 2;
  }
}

export default Line;