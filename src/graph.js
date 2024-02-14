class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );

    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  printAdjacencyList() {
    for (const vertex in this.adjacencyList) {
      console.log(`${vertex} -> ${this.adjacencyList[vertex].join(", ")}`);
    }
  }

  createGrid(graph) {
    for (let i = 1; i <= 8; i++) {
      for (let j = 1; j <= 8; j++) {
        graph.addVertex(`${String.fromCharCode(64 + i)}${j}`);
      }
    }

    for (let i = 1; i <= 8; i++) {
      for (let j = 1; j <= 7; j++) {
        graph.addEdge(
          `${String.fromCharCode(64 + i)}${j}`,
          `${String.fromCharCode(64 + i)}${j + 1}`
        );
      }
    }

    for (let i = 1; i <= 7; i++) {
      for (let j = 1; j <= 8; j++) {
        graph.addEdge(
          `${String.fromCharCode(64 + i)}${j}`,
          `${String.fromCharCode(64 + i + 1)}${j}`
        );
      }
    }
  }
}

module.exports = Graph;
