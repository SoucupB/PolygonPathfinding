import tap from 'tap'
const { test } = tap;
import Polygon from '../Geometry/Polygon.js';
import Point from '../Geometry/Point.js';
import Search from '../Searcher/Search.js';

test('Check simple path in a square v1', (t) => {
  let polygon = new Polygon();

  polygon.push(0, 0);
  polygon.push(0, 5);
  polygon.push(5, 5);
  polygon.push(5, 0);
  polygon.closePolygon();

  polygon.triangulate();

  let searcher = new Search(polygon);
  t.notOk(searcher.getPointsPath(new Point(1, 1), new Point(4, 2)) == null, 'Result should not be null');
  t.end();
});

test('Check simple path in a square v2', (t) => {
  let polygon = new Polygon();

  polygon.push(0, 0);
  polygon.push(0, 5);
  polygon.push(5, 5);
  polygon.push(5, 0);
  polygon.closePolygon();

  polygon.triangulate();

  let searcher = new Search(polygon);
  t.notOk(searcher.getPointsPath(new Point(1, 1), new Point(3, 2)) == null, 'Result should not be null when the dst point is on a triangle segment');
  t.end();
});