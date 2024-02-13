function QueueFactory() {
  const queue = [];
  let head = 0;
  let tail = 0;
  const maxSize = 100;

  function enqueue(item) {
    if (isFull()) {
      return false;
    }
    queue[tail] = item;
    tail++;
    return true;
  }

  function dequeue() {
    if (isEmpty()) {
      return null;
    }
    const item = queue[head];
    head++;
    return item;
  }

  function peek() {
    return isEmpty() ? null : queue[head];
  }

  function getLength() {
    return tail - head;
  }

  function isEmpty() {
    return getLength() === 0;
  }

  function isFull() {
    return getLength() === maxSize;
  }

  return {
    enqueue,
    dequeue,
    peek,
    getLength,
    isEmpty,
    isFull,
  };
}

export function GraphFactory() {
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

  //   function placeKnight(location) {
  //     const neighbors = adjacencyList[location].slice(); // Deep copy
  //     const knight = KnightFactory(location); // Create knight object

  //     removeVertex(location); // Remove vertex at chosen location
  //     addVertex(knight); // Add knight location string as replacement

  //     // Loop through list of neighbors
  //     neighbors.forEach((neighbor) => {
  //       // Add edge between knight and neighbor
  //       addEdge(knight, neighbor);
  //     });
  //   }

  //   function setDestination(location) {
  //     const neighbors = adjacencyList[location].slice(); // Deep copy
  //     const destination = DestinationFactory(location); // Create destination object

  //     removeVertex(location); // Remove vertex at chosen location
  //     addVertex(destination); // Add destination location string as replacement

  //     // Loop through list of neighbors
  //     neighbors.forEach((neighbor) => {
  //       // Add edge between destination and neighbor
  //       addEdge(destination, neighbor);
  //     });
  //   }

  return {
    adjacencyList,
    addVertex,
    addEdge,
    printAdjacencyList,
    removeEdge,
    removeVertex,
    createGrid,
    // placeKnight,
    // setDestination,
  };
}

// function KnightFactory(location) {
//   function getLocation() {
//     return `Knight at: ${location}`;
//   }

//   return getLocation();
// }

// function DestinationFactory(location) {
//   function getLocation() {
//     return `Destination at: ${location}`;
//   }

//   return getLocation();
// }

const graph = GraphFactory();

function breadthFirstTraversal(graph, startingVertex) {
  const visited = new Set();
  const result = [];
  const queue = QueueFactory();

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

breadthFirstTraversal(graph, "A1");
