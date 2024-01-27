import tap from 'tap'
const { test } = tap;

import AStar from '../Searcher/AStar.js';

class Node {
  constructor(id) {
    this.id = id;
    this.neighbours = [];
  }

  static generateNeighbours(node) {
    return node.neighbours;
  }

  static getID(node) {
    return node.id;
  }

  static edgeCost(nodeA, nodeB, costMethod) {
    return costMethod[nodeA.id][nodeB.id];
  }

  push(node) {
    this.neighbours.push(node);
  }
}

test('Minimum path test', (t) => {
  let nodes = [];

  for(let i = 0; i < 5; i++) {
    nodes.push(new Node(i + 1));
  }

  let costMethod = Array.from({ length: 100 }, () => Array(100).fill(0));

  nodes[0].push(nodes[1]);
  nodes[0].push(nodes[2]);
  nodes[1].push(nodes[4]);
  nodes[2].push(nodes[3]);
  nodes[3].push(nodes[4]);

  costMethod[nodes[0].id][nodes[1].id] = 5;
  costMethod[nodes[0].id][nodes[2].id] = 7;
  costMethod[nodes[1].id][nodes[4].id] = 10;
  costMethod[nodes[2].id][nodes[3].id] = 1;
  costMethod[nodes[3].id][nodes[4].id] = 1;

  let searcher = new AStar(Node.generateNeighbours, Node.getID, (nodeA, nodeB) => Node.edgeCost(nodeA, nodeB, costMethod), (nodeA, nodeB) => Node.edgeCost(nodeA, nodeB, costMethod));

  let nodesChecker = [1, 3, 4, 5];
  let searchNodes = searcher.search(nodes[0], nodes[4]);
  for(let i = 0; i < nodesChecker.length; i++) {
    t.equal(nodesChecker[i], searchNodes[i].id, 'minimum path');
  }
  t.end();
});