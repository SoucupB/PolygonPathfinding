import tap from 'tap'
const { test } = tap;

import Triangle from '../Geometry/Triangle.js';
import Point from '../Geometry/Point.js';
import Navmesh from '../Geometry/Navmesh.js';

test('2 triangles for a square', (t) => {
  let navmesh = new Navmesh([
    new Point(
      0, 0
    ),
    new Point(
      1, 0
    ),
    new Point(
      1, 1
    ),
    new Point(
      0, 1
    ),
    new Point(
      0, 0
    ),
  ]);
  navmesh.triangulate();
  t.equal(navmesh.triangles.length, 2, '2 triangles');
  t.end();
});