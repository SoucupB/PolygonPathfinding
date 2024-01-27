import Point from "../Geometry/Point.js";
import Polygon from "../Geometry/Polygon.js";
import Line from "../Geometry/Line.js";

class Funnel {
  constructor() {
  }

  static midLines(triangles) {
    let points = [];
    for(let i = 0, c = triangles.length; i < c; i++) {
      points.push(triangles[i].midPoint());
    }

    return points;
  }

  static doesMidLineIntersecLines(st, end, midLines) {
    for(let i = 0, c = midLines.length - 1; i < c; i++) {
      if(Point.areSegmentsIntersecting(st, end, midLines[i], midLines[i + 1])) {
        return true;
      }
    }
    return false;
  }

  static printFunnelLines(funnel) {
    let resp = [];
    for(let i = 0; i < funnel.length; i++) {
      resp.push(`(${funnel[i].pointA.y},${funnel[i].pointA.x}),(${funnel[i].pointB.y},${funnel[i].pointB.x})`);
    }

    console.log(resp.join('\n'))
  }

  static print(funnel) {
    let resp = [];
    let lines = funnel.lines;
    for(let i = 0, c = lines.length; i < c; i++) {
      resp.push(`(${lines[i].x},${lines[i].y})`);
    }

    console.log(resp.join(','))
  }

  static printTrianglePoints(triangles) {
    let response = [];

    for(let i = 0, c = triangles.length; i < c; i++) {
      const triangle = triangles[i];
      let points = [triangle.a, triangle.b, triangle.c];
      for(let j = 0; j < points.length; j++) {
        for(let k = j + 1; k < points.length; k++) {
          response.push(`(${points[j].y},${points[j].x}),(${points[k].y},${points[k].x})`)
        }
      }
    }
    console.log(response.join(','))
  }

  static triangleToLines(triangle) {
    let points = [triangle.a, triangle.b, triangle.c];
    let lines = [];

    for(let i = 0; i < 2; i++) {
      for(let j = i + 1; j < 3; j++) {
        lines.push(new Line(points[i], points[j]));
      }
    }

    return lines;
  }

  static getValidLinesFromTriangle(triangles, hull = []) {
    let allAlines = [];
    for(let i = 0, c = triangles.length; i < c; i++) {
      allAlines = allAlines.concat(Funnel.triangleToLines(triangles[i]));
    }
    for(let i = 0, c = allAlines.length; i < c; i++) {
      let unique = 1;

      for(let j = 0; j < c; j++) {
        if(i != j && allAlines[i].areLinesEqual(allAlines[j])) {
          unique = 0;
          break;
        }
      }
      if(unique) {
        hull.push(allAlines[i]);
      }
    }
  }

  static sortHull_t(hull, lineCount, lastIndex = 0, pointsArray = []) {
    for(let i = 0, c = hull.length; i < c; i++) {
      const jointPoints = hull[i].jointPoints(hull[lastIndex]);
      if(i != lastIndex && jointPoints.length == 1 && !lineCount[i]) {
        lineCount[i] = 1;
        pointsArray.push(jointPoints[0]);
        Funnel.sortHull_t(hull, lineCount, i, pointsArray);
      }
    }
  }

  static sortHull(hull) {
    let lineCount = new Array(hull.length).fill(0);
    let pointsArray = [];
    lineCount[0] = 1;
    Funnel.sortHull_t(hull, lineCount, 0, pointsArray);
    if(pointsArray[0].arePointsEqual(hull[0].pointA)) {
      pointsArray.push(hull[0].pointB);
    }
    else {
      pointsArray.push(hull[0].pointA);
    }
    // Funnel.printFunnelPoints(pointsArray);
    let polygon = new Polygon();
    for(let i = 0, c = pointsArray.length; i < c; i++) {
      polygon.push(pointsArray[i].y, pointsArray[i].x)
    }
    polygon.closePolygon(0);
    return polygon;
  }

  static searchPath(triangles) {
    let hull = [];
    Funnel.getValidLinesFromTriangle(triangles, hull)
    return Funnel.sortHull(hull);
  }

  static rotatePoint(point, center, angle) {
    const thetaRad = (Math.PI / 180) * angle;
    const newX = (point.x - center.x) * Math.cos(thetaRad) - (point.y - center.y) * Math.sin(thetaRad) + center.x;
    const newY = (point.x - center.x) * Math.sin(thetaRad) + (point.y - center.y) * Math.cos(thetaRad) + center.y;
    return new Point(newY, newX);
  }

  static construct_t(triangles) {
    const startingPoints = triangles[0].disjointPoints(triangles[1]);
    if(startingPoints.length != 1) {
      return null;
    }
    return Funnel.searchPath(triangles);
  }

  static calculateBisectorPoints(pointA, pointB, pointC, length) {
    const vectorAB = new Point(pointB.y - pointA.y, pointB.x - pointA.x)
    const vectorBC = new Point(pointC.y - pointB.y, pointC.x - pointB.x);
    const bisector1 = Funnel.calculateBisectorVector(vectorAB, vectorBC);
    const bisectorPoint1 = Funnel.extendPoint(pointB, bisector1, length);
  
    return [bisectorPoint1, Funnel.rotatePoint(bisectorPoint1, pointB, 180)];
  }

  static calculateBisectorVector(v1, v2) {
    const angle1 = Math.atan2(v1.y, v1.x);
    const angle2 = Math.atan2(v2.y, v2.x);
    const bisectorAngle = (angle1 + angle2 + Math.PI) / 2;
  
    return new Point(Math.sin(bisectorAngle), Math.cos(bisectorAngle));
  }

  static extendPoint(point, vector, length) {
    return new Point(point.y + vector.y * length, point.x + vector.x * length)
  }

  static constructBisectorsArray(funnel) {
    let bisectors = [];
    let points = funnel.lines;
    for(let i = 0, c = points.length - 1; i < c; i++) {
      let pointA = points[i], pointB = points[(i + 1) % c], pointC = points[(i + 2) % c];

      let bisectorPoints = Funnel.calculateBisectorPoints(pointA, pointB, pointC, 0.01);
      for(let j = 0; j < 2; j++) {
        if(funnel.isPointInsidePolygon(bisectorPoints[j])) {
          bisectors.push(new Line(pointB, bisectorPoints[j]));
          break;
        }
      }
    }

    return bisectors;
  }

  static construct(triangles) {
    if(!triangles.length) {
      return null;
    }
    if(triangles.length == 1) {
      return new Polygon(
        triangles[0].a,
        triangles[0].b,
        triangles[0].c
      );
    }

    return Funnel.construct_t(triangles);
  }
}

export default Funnel;