function CreateGraph() {
  const adjacencyList = {};

  function addVertex(vertex) {
    adjacencyList[vertex] = [];
  }

  function addEdge(vertex1, vertex2) {
    adjacencyList[vertex1].push(vertex2);
    adjacencyList[vertex2].push(vertex1);
  }

  function printAdjacencyList() {
    for (const vertex in adjacencyList) {
      console.log(`${vertex} -> ${adjacencyList[vertex].join(", ")}`);
    }
  }

  function removeEdge(vertex1, vertex2) {
    adjacencyList[vertex1] = adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    adjacencyList[vertex2] = adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  function removeVertex(vertex) {
    while (adjacencyList[vertex].length) {
      const adjacentVertex = adjacencyList[vertex].pop();
      removeEdge(vertex, adjacentVertex);
    }
    delete adjacencyList[vertex];
  }

  return {
    adjacencyList,
    addVertex,
    addEdge,
    printAdjacencyList,
    removeEdge,
    removeVertex,
  };
}

const graph = CreateGraph();

// Create vertices for an 8x8 grid
for (let i = 1; i <= 8; i++) {
  for (let j = 1; j <= 8; j++) {
    graph.addVertex(`${String.fromCharCode(64 + i)}${j}`);
  }
}

// Create edges for horizontal connections
for (let i = 1; i <= 8; i++) {
  for (let j = 1; j <= 7; j++) {
    graph.addEdge(
      `${String.fromCharCode(64 + i)}${j}`,
      `${String.fromCharCode(64 + i)}${j + 1}`
    );
  }
}

// Create edges for vertical connections
for (let i = 1; i <= 7; i++) {
  for (let j = 1; j <= 8; j++) {
    graph.addEdge(
      `${String.fromCharCode(64 + i)}${j}`,
      `${String.fromCharCode(64 + i + 1)}${j}`
    );
  }
}

// Print the adjacency list
graph.printAdjacencyList();

function App() {
  return (
    <>
      <h1>HI!!!</h1>
    </>
  );
}

export default App;
