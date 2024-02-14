const Graph = require("./graph");
const Queue = require("./queue");

function breadthFirstTraversal(graph, startingVertex) {
  const visited = new Set();
  const result = [];
  const queue = new Queue();

  queue.enqueue(startingVertex);
  visited.add(startingVertex);

  while (!queue.isEmpty()) {
    const currentVertex = queue.dequeue();
    result.push(currentVertex);

    for (const neighbor of graph.adjacencyList[currentVertex]) {
      if (!visited.has(neighbor)) {
        queue.enqueue(neighbor);
        visited.add(neighbor);
      }
    }
  }

  return result;
}

const graph = new Graph();
graph.createGrid(graph);
graph.printAdjacencyList();
console.log(breadthFirstTraversal(graph, "A1"));
