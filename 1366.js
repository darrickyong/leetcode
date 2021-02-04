// Input: votes = ["ABC", "ACB", "ABC", "ACB", "ACB"]
// Output: "ACB"

// Input: votes = ["ABC", "CBA", "BCA"]
// Output: "BCA"
// {
// new Array(votes[0].length).fill(0); how many places there are. [0, 0, 0]
    // 'a': [1,0,2], 
    // 'b': [1,2,0],
    // 'c': [1,1,1],
// }

// [
//  [a, [1,0,2]], 
//  [b, [1,2,0]], 
//  [c, [1,1,1]]
// ]

// 
// iterate through places, check if there is a tie, go through everything and make sure there is no tie.
// if there is no tie, get all the non-tie values, and add into string unil I get to a tie.


// res array = [b, c, a]

// Input: votes = ["WXYZ", "XYZW"]
// Output: "XWYZ"

const rankTeams = (votes) => {
  const counter = {};

  for (let i = 0; i < votes.length; i++) {
    const vote = votes[i];
    for (let j = 0; j < vote.length; j++) {
      const letter = vote[j];
      if (!counter[letter]) {
        counter[letter] = Array(26).fill(0);
      }
      counter[letter][j] += 1;
    }
  }

  console.log(Object.entries(counter));

}

console.log(rankTeams(['ABC', 'ABC', 'ACB']));
// console.log(rankTeams(["ABC", "ACB", "ABC", "ACB", "ACB"]));