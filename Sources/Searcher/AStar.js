import Heap from "./Heap.js";

class AStar {
  constructor(generateNeighbours, uniqueID, edgeCost, edgeHeuristics) {
    this.generateNeighbours = generateNeighbours;
    this.uniqueID = uniqueID;
    this.edgeCost = edgeCost;
    this.edgeHeuristics = edgeHeuristics;
    this.heap = new Heap((a, b) => {
      return a.heuristics_cost < b.heuristics_cost;
    });
    this.cost = null;
  }

  search(src, dst) {
    this.heap.push({
      node: src,
      cost: 0,
      parent: null,
      heuristics_cost: 0
    });

    return this.search_t(dst);
  }

  retrieveNodes(dst) {
    let nodes = [];
    while(dst) {
      nodes.push(dst.node);
      dst = dst.parent;
    }
    return nodes.reverse();
  }

  search_t(dst) {
    let visited = {};
    let costPerID = {};

    while(this.heap.size()) {
      let currentNode = this.heap.top();
      const currentNodeID = this.uniqueID(currentNode.node);

      if(this.uniqueID(dst) == currentNodeID) {
        return this.retrieveNodes(currentNode);
      }
      this.heap.pop();
      visited[currentNodeID] = true;

      let neighbours = this.generateNeighbours(currentNode.node);

      for(let i = 0, c = neighbours.length; i < c; i++) {
        const neighbourID = this.uniqueID(neighbours[i]);

        if(!(neighbourID in visited)) {
          const currentCost = this.edgeCost(currentNode.node, neighbours[i]) + currentNode.cost;
          if((neighbourID in costPerID) && costPerID[neighbourID] < currentCost) {
            continue;
          }

          this.heap.push({
            heuristics_cost: currentCost + this.edgeHeuristics(currentNode.node, neighbours[i], dst),
            cost: currentCost,
            node: neighbours[i],
            parent: currentNode
          });

          costPerID[neighbourID] = currentCost;
        }
      }
    }
    return null;
  }
}

export default AStar;