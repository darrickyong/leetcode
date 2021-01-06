// Given non-empty 2d array grid of 0/1. An island is a group of ones.
// Connected vertically or horizontally only, not diagonally.
// return the maximum area of any one island. Find the biggest island.


// if it's a 1 and position is not in visited set, add to queue, and add this position to visited set.
// creating set (n x m, limited by number of land spaces) and queue is (size of biggest of island)


//  [
//   [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//   [0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0],
//   [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
//   [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
//  ]

// how do you mark a spot as visited - switch 1 to a 0.
// how do you track the area of the island, so far
// when you revisit island again, how do you avoid redoing prev calculations

//  [
//   [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0],
//   [0, 1, 2, 0, 1, 0, 0, 5, 0, 1, 0, 0, 0],
//   [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
//   [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
//  ]
