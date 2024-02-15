// const Graph = require("./graph");
// const Queue = require("./queue");

// function breadthFirstTraversal(graph, startingVertex) {
//   const visited = new Set();
//   const result = [];
//   const queue = new Queue();

//   queue.enqueue(startingVertex);
//   visited.add(startingVertex);

//   while (!queue.isEmpty()) {
//     const currentVertex = queue.dequeue();
//     result.push(currentVertex);

//     for (const neighbor of graph.adjacencyList[currentVertex]) {
//       if (!visited.has(neighbor)) {
//         queue.enqueue(neighbor);
//         visited.add(neighbor);
//       }
//     }
//   }

//   return result;
// }

// const graph = new Graph();
// graph.createGrid(graph);
// graph.printAdjacencyList();
// console.log(breadthFirstTraversal(graph, "A1"));

function getPossibleMoves(position) {
  // Get letter and number
  let [letter, number] = position;
  const moves = []; // Initiate moves array

  // Iterate over possible letter values from -2 to 2
  for (let i = -2; i <= 2; i++) {
    // Iterate over possible number values from -2 to 2
    for (let j = -2; j <= 2; j++) {
      // Check for valid moves by ensuring that only moves that satisfy the
      // knight's L-shaped pattern are considered. The Math.abs(i * j)
      // calculates the product of i and j and takes its absolute value. In
      // a valid knight move, one of i or j should be 2, and the other should
      // be 1 (or vice versa). This condition filters out other combinations.
      if (Math.abs(i * j) === 2) {
        // Calculate the new letter by adding i to the ASCII code of the current letter
        const newLetter = String.fromCharCode(letter.charCodeAt(0) + i);
        // Calculate the new number by adding j to the current number
        const newNumber = parseInt(number) + j;
        // If the newLetter and newNumber are within bounds...
        if (
          newLetter >= "A" &&
          newLetter <= "H" &&
          newNumber >= 1 &&
          newNumber <= 8
        ) {
          // ...push combination to array
          moves.push(newLetter + newNumber);
        }
      }
    }
  }

  // If valid input, return resulting array
  if (letter >= "A" && letter <= "H" && number >= 1 && number <= 8)
    return moves;
  // Else return empty array
  else return [];
}

module.exports = getPossibleMoves;

// Example:
// A1, A2, A3, A4, A5, A6, A7, A8
// B1, B2, B3, B4, B5, B6, B7, B8
// C1, C2, C3, C4, C5, C6, C7, C8
// D1, D2, D3, D4, D5, D6, D7, D8
// E1, E2, E3, E4, E5, E6, E7, E8
// F1, F2, F3, F4, F5, F6, F7, F8
// G1, G2, G3, G4, G5, G6, G7, G8
// H1, H2, H3, H4, H5, H6, H7, H8
