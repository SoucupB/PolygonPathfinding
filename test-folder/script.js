const { Point, Polygon, Search } = require('polygon-pathfinding');

let polygon = new Polygon();

polygon.push(0, 0); // y, x
polygon.push(0, 5);
polygon.push(5, 5);
polygon.push(5, 0);
polygon.closePolygon(); // Creates a line to the first point in order to close it.

polygon.triangulate(); // This will triangulate the polygon (effectivelly creating a navmesh).

console.log(polygon)

let searcher = new Search(polygon);
console.log(searcher.getPointsPath(new Point(1, 1), new Point(2, 2)));