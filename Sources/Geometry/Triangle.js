import Point from "./Point.js";

class Triangle {
  constructor(a, b, c, id = 0) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.id = id;

    this.neighbours = [];
  }

  isPointInside(point) {
    const [x, y] = [point.x, point.y];
    const [x1, y1] = [this.a.x, this.a.y];
    const [x2, y2] = [this.b.x, this.b.y];
    const [x3, y3] = [this.c.x, this.c.y];

    const denominator = (y2 - y3) * (x1 - x3) + (x3 - x2) * (y1 - y3);

    const alpha = ((y2 - y3) * (x - x3) + (x3 - x2) * (y - y3)) / denominator;
    const beta = ((y3 - y1) * (x - x3) + (x1 - x3) * (y - y3)) / denominator;
    const gamma = 1 - alpha - beta;

    return alpha > 0 && beta > 0 && gamma > 0;
  }

  _display() {
    let stringResponse = `id: ${this.id}, neigh: `
    let neighIDs = [];
    for(let i = 0, c = this.neighbours.length; i < c; i++) {
      neighIDs.push(this.neighbours[i].id);
    }
    console.log(stringResponse + neighIDs.join(', '));
  }

  displayNeighbours(recursive = false) {
    if(recursive) {
      let triangleMap = {};
      this.displayNeighbours_t(triangleMap);
      return ;
    }
    this._display();
  }

  displayNeighbours_t(trianglesChecked = {}) {
    if(this.id in trianglesChecked) {
      return ;
    }
    trianglesChecked[this.id] = 1;
    this._display();
    for(let i = 0, c = this.neighbours.length; i < c; i++) {
      this.neighbours[i].displayNeighbours_t(trianglesChecked)
    }
  }

  midPoint() {
    return new Point(
      (this.a.y + this.b.y + this.c.y) / 3.0,
      (this.a.x + this.b.x + this.c.x) / 3.0
    );
  }

  midDistance(triA) {
    return this.midPoint().distancef(triA.midPoint());
  }

  doesTriangleHavePoint(point) {
    return this.a.arePointsEqual(point) ||
           this.b.arePointsEqual(point) ||
           this.c.arePointsEqual(point);
  }

  disjointPoints(triangle) {
    let points = [];
    let trianglePoints = [this.a, this.b, this.c];

    for(let i = 0, c = trianglePoints.length; i < c; i++) {
      if(!triangle.doesTriangleHavePoint(trianglePoints[i])) {
        points.push(trianglePoints[i]);
      }
    }

    return points;
  }

  disjointPointsFromPoint(point) {
    let points = [];
    let trianglePoints = [this.a, this.b, this.c];

    for(let i = 0, c = trianglePoints.length; i < c; i++) {
      if(!point.arePointsEqual(trianglePoints[i])) {
        points.push(trianglePoints[i]);
      }
    }

    return points;
  }

  commonPoints(triangle) {
    let points = [];
    let trianglePoints = [this.a, this.b, this.c];

    for(let i = 0, c = trianglePoints.length; i < c; i++) {
      if(triangle.doesTriangleHavePoint(trianglePoints[i])) {
        points.push(trianglePoints[i]);
      }
    }

    return points;
  }

  areTriangleNeighbours(triB) {
    return (
      (this.a.arePointsEqual(triB.a) ? 1 : 0) +
      (this.a.arePointsEqual(triB.b) ? 1 : 0) +
      (this.a.arePointsEqual(triB.c) ? 1 : 0) +
      
      (this.b.arePointsEqual(triB.a) ? 1 : 0) +
      (this.b.arePointsEqual(triB.b) ? 1 : 0) +
      (this.b.arePointsEqual(triB.c) ? 1 : 0) +
      
      (this.c.arePointsEqual(triB.a) ? 1 : 0) +
      (this.c.arePointsEqual(triB.b) ? 1 : 0) +
      (this.c.arePointsEqual(triB.c) ? 1 : 0)
    ) >= 2;
  }
}

export default Triangle;