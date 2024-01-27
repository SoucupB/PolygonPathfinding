import tap from 'tap'
const { test } = tap;

import Heap from '../Searcher/Heap.js';

test('Heap test', (t) => {
  let heap = new Heap((a, b) => {
    return a < b;
  });

  heap.push(5)
  heap.push(6)
  heap.push(3)
  heap.push(1)
  heap.push(4)
  t.equal(heap.top(), 1, 'minimum element');
  t.end();
});

test('Sort Heap', (t) => {
  let heap = new Heap((a, b) => {
    return a < b;
  });

  heap.push(5)
  heap.push(6)
  heap.push(3)
  heap.push(1)
  heap.push(4)

  let sortedArray = [1, 3, 4, 5, 6];
  for(let i = 0; i < sortedArray.length; i++) {
    t.equal(heap.top(), sortedArray[i], 'minimum element');
    heap.pop();
  }
  t.end();
});

test('Sort Heap Min', (t) => {
  let heap = new Heap((a, b) => {
    return a < b;
  });

  heap.push(5)
  heap.push(6)
  heap.push(3)
  heap.push(1)
  heap.push(4)

  let sortedArray = [1, 3, 4, 5, 6];
  for(let i = 0; i < sortedArray.length; i++) {
    t.equal(heap.top(), sortedArray[i], 'minimum element');
    heap.pop();
  }
  t.end();
});

test('Sort Heap Max', (t) => {
  let heap = new Heap((a, b) => {
    return a > b;
  });

  heap.push(5)
  heap.push(6)
  heap.push(3)
  heap.push(1)
  heap.push(4)

  let sortedArray = [6, 5, 4, 3, 1];
  for(let i = 0; i < sortedArray.length; i++) {
    t.equal(heap.top(), sortedArray[i], 'maximum element');
    heap.pop();
  }
  t.equal(heap.size(), 0, 'size 0');
  t.end();
});