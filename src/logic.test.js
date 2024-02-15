const getPossibleMoves = require("./logic");

describe("getPossibleMoves", () => {
  it("should return correct moves for a position in the middle of the board", () => {
    const expectedMoves = ["B5", "B3", "C2", "E2", "C6", "E6", "F3", "F5"];

    expect(getPossibleMoves("D4")).toEqual(
      expect.arrayContaining(expectedMoves)
    );
  });

  it("should return correct moves for a position near the middle of an edge", () => {
    const expectedMoves = ["B6", "C5", "C3", "B2"];

    expect(getPossibleMoves("A4")).toEqual(
      expect.arrayContaining(expectedMoves)
    );
  });

  it("should return correct moves for a position near a corner of the board", () => {
    expect(getPossibleMoves("A1")).toEqual(["B3", "C2"]);
  });

  it("should return an empty array for an invalid position outside the board", () => {
    expect(getPossibleMoves("I9")).toEqual([]);
  });
});
