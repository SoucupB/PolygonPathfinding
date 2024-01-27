const { Point, Polygon, Search } = require('polygon-pathfinding');

let polygon = new Polygon();

polygon.push(0, 0);
polygon.push(5, 0);
polygon.push(5, 5);
polygon.push(2, 5);
polygon.push(2, 3);
polygon.push(0, 3);
polygon.closePolygon();

polygon.triangulate();
let searcher = new Search(polygon);
console.log(searcher.getPointsPath(new Point(0.3, 2.7), new Point(2.4, 4.5)))