function GraphFactory() {
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

  function createGrid() {
    for (let i = 1; i <= 8; i++) {
      for (let j = 1; j <= 8; j++) {
        addVertex(`${String.fromCharCode(64 + i)}${j}`);
      }
    }

    for (let i = 1; i <= 8; i++) {
      for (let j = 1; j <= 7; j++) {
        addEdge(
          `${String.fromCharCode(64 + i)}${j}`,
          `${String.fromCharCode(64 + i)}${j + 1}`
        );
      }
    }

    for (let i = 1; i <= 7; i++) {
      for (let j = 1; j <= 8; j++) {
        addEdge(
          `${String.fromCharCode(64 + i)}${j}`,
          `${String.fromCharCode(64 + i + 1)}${j}`
        );
      }
    }
  }

  function placeKnight(location) {
    const neighbors = adjacencyList[location].slice(); // Deep copy
    const knight = KnightFactory(location); // Create knight object

    removeVertex(location); // Remove vertex at chosen location
    addVertex(knight); // Add knight location string as replacement

    // Loop through list of neighbors
    neighbors.forEach((neighbor) => {
      // Add edge between knight and neighbor
      addEdge(knight, neighbor);
    });
  }

  return {
    adjacencyList,
    addVertex,
    addEdge,
    printAdjacencyList,
    removeEdge,
    removeVertex,
    createGrid,
    placeKnight,
  };
}

function KnightFactory(location) {
  function getLocation() {
    return `Knight at: ${location}`;
  }

  return getLocation();
}

const graph = GraphFactory();
graph.createGrid();
graph.printAdjacencyList();
graph.placeKnight("A1");
graph.printAdjacencyList();

// 6. Set destination (ending square)
// -->
// -->
// -->
// -->
// -->
// -->
// 7. Make move
// 8. Use chosen search algorithm to find shortest path between starting square
//    and ending square
