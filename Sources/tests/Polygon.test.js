import tap from 'tap'
const { test } = tap;
import Polygon from '../Geometry/Polygon.js';

test('Push 2 lines', (t) => {
  const polygon = new Polygon();
  polygon.push(0, 0);
  polygon.push(0, 5);
  polygon.push(5, 5);

  t.equal(polygon.linesCount(), 2, '2 lines');
  t.end();
});

test('Non crossing lines', (t) => {
  const polygon = new Polygon();
  let points = [[0, 0], [0, 5], [5, 5], [3, 3]]
  for(let i = 0; i < points.length; i++) {
    t.equal(polygon.push(points[i][0], points[i][1]), true, `push point ${i}`);
  }
  t.end();
});

test('First crossing lines v1', (t) => {
  const polygon = new Polygon();
  let points = [[0, 0], [0, 5], [5, 5], [3, 3]]
  for(let i = 0; i < points.length; i++) {
    polygon.push(points[i][0], points[i][1])
  }
  t.equal(polygon.push(3, 6), false, `cross line`);
  t.end();
});

test('First crossing lines v2', (t) => {
  const polygon = new Polygon();
  let points = [[0, 0], [0, 5], [5, 5], [3, 3]]
  for(let i = 0; i < points.length; i++) {
    polygon.push(points[i][0], points[i][1])
  }
  t.equal(polygon.push(2, 6), false, `cross line`);
  t.end();
});

test('First crossing lines v3', (t) => {
  const polygon = new Polygon();
  let points = [[0, 0], [0, 5], [5, 5], [3, 3]]
  for(let i = 0; i < points.length; i++) {
    polygon.push(points[i][0], points[i][1])
  }
  t.equal(polygon.push(8, 6), true, `cross line`);
  t.end();
});

test('First crossing lines v4', (t) => {
  const polygon = new Polygon();
  let points = [[0, 0], [0, 5], [5, 5], [3, 3]]
  for(let i = 0; i < points.length; i++) {
    polygon.push(points[i][0], points[i][1])
  }
  t.equal(polygon.push(7, 7), false, `cross line`);
  t.end();
});

test('First crossing lines v5', (t) => {
  const polygon = new Polygon();
  let points = [[0, 0], [0, 5], [5, 5], [3, 3]]
  for(let i = 0; i < points.length; i++) {
    polygon.push(points[i][0], points[i][1])
  }
  t.equal(polygon.push(0, 0), false, `cross line`);
  t.end();
});

test('Point line intersection', (t) => {
  const polygon = new Polygon();
  let points = [[0, 0], [0, 5], [5, 5], [3, 3]]
  for(let i = 0; i < points.length; i++) {
    polygon.push(points[i][0], points[i][1])
  }
  t.equal(polygon.push(0, 4), false, `cross line`);
  t.end();
});

test('Push index v1', (t) => {
  const polygon = new Polygon();
  let points = [[0, 0], [0, 5], [5, 5], [3, 3]]
  for(let i = 0; i < points.length; i++) {
    polygon.push(points[i][0], points[i][1])
  }
  t.equal(polygon.closePolygon(), true, `cross line`);
  t.end();
});

test('Push index (self intersecting) v2', (t) => {
  const polygon = new Polygon();
  let points = [[0, 0], [0, 5], [5, 5], [3, 6]]
  for(let i = 0; i < points.length; i++) {
    polygon.push(points[i][0], points[i][1])
  }
  t.equal(polygon.closePolygon(), false, `cross line`);
  t.end();
});