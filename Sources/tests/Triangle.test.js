import tap from 'tap'
const { test } = tap;

import Triangle from '../Geometry/Triangle.js';
import Point from '../Geometry/Point.js';

test('Point inside triangle', (t) => {
  const triangle = new Triangle(
    new Point(0, 3),
    new Point(4, 4),
    new Point(1, 1),
  )
  t.equal(triangle.isPointInside(new Point(2, 3)), true, 'is point inside');
  t.end();
});

test('Point not inside triange', (t) => {
  const triangle = new Triangle(
    new Point(0, 3),
    new Point(4, 4),
    new Point(1, 1),
  )
  t.equal(triangle.isPointInside(new Point(2, 5)), false, 'is point inside');
  t.end();
});

test('Neigbours triangles v1', (t) => {
  const triA = new Triangle(
    new Point(0, 3),
    new Point(4, 4),
    new Point(1, 1),
  );
  
  const triB = new Triangle(
    new Point(0, 3),
    new Point(4, 4),
    new Point(6, 8),
  );
  t.equal(triA.areTriangleNeighbours(triB), true, 'triangles are neighbours');
  t.end();
});

test('Neigbours triangles v2', (t) => {
  const triA = new Triangle(
    new Point(0, 3),
    new Point(4, 4),
    new Point(1, 1),
  );
  
  const triB = new Triangle(
    new Point(6, 8),
    new Point(0, 3),
    new Point(4, 4),
  );
  t.equal(triA.areTriangleNeighbours(triB), true, 'triangles are neighbours');
  t.end();
});

test('Neigbours triangles v3', (t) => {
  const triA = new Triangle(
    new Point(0, 3),
    new Point(4, 5),
    new Point(1, 1),
  );
  
  const triB = new Triangle(
    new Point(6, 8),
    new Point(0, 3),
    new Point(4, 4),
  );
  t.equal(triA.areTriangleNeighbours(triB), false, 'triangles are neighbours');
  t.end();
});

test('Neigbours triangles v4', (t) => {
  const triA = new Triangle(
    new Point(0, 3),
    new Point(4.1, 4),
    new Point(1, 1),
  );
  
  const triB = new Triangle(
    new Point(6, 8),
    new Point(0, 3),
    new Point(4, 4),
  );
  t.equal(triA.areTriangleNeighbours(triB), false, 'triangles are neighbours');
  t.end();
});

test('Neigbours triangles disjoint', (t) => {
  const triA = new Triangle(
    new Point(0, 3),
    new Point(4, 4),
    new Point(1, 1),
  );
  
  const triB = new Triangle(
    new Point(1, 6),
    new Point(4, 5),
    new Point(6, 8),
  );
  t.equal(triA.areTriangleNeighbours(triB), false, 'triangles are neighbours');
  t.end();
});