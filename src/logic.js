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

function getPossibleMoves(graph, position) {
  // Letters: 2 "above" and 2 "below"
  // Numbers: 2 "above" and 2 "below"
  // Possible moves (D4): B5, B3, C2, E2, C6, E6, F3, F5
  // B3: split into letter and number, lower number by 2, lower letter by 2
  // Split into letter and number
  let letter = position[0];
  let number = parseInt(position[1]);
  console.log(letter, number);

  // Manipulate letter and number to get to possible moves
  const newLetter1 = String.fromCharCode(letter.charCodeAt(0) - 2);
  const newNumber1 = number - 1;
  const firstMove = newLetter1 + newNumber1;

  const newLetter2 = String.fromCharCode(letter.charCodeAt(0) - 1);
  const newNumber2 = number - 2;
  const secondMove = newLetter2 + newNumber2;

  // const newLetter3 = String.fromCharCode(letter.charCodeAt(0) + 1);
  // const newNumber3 = number + 2;
  // const thirdMove = newLetter3 + newNumber3;

  console.log(firstMove, secondMove);
}

console.log(getPossibleMoves(graph, "D4"));

// Example:
// A1, A2, A3, A4, A5, A6, A7, A8
// B1, B2, B3, B4, B5, B6, B7, B8
// C1, C2, C3, C4, C5, C6, C7, C8
// D1, D2, D3, D4, D5, D6, D7, D8
// E1, E2, E3, E4, E5, E6, E7, E8
// F1, F2, F3, F4, F5, F6, F7, F8
// G1, G2, G3, G4, G5, G6, G7, G8
// H1, H2, H3, H4, H5, H6, H7, H8
