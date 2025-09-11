const scoreFrame = (roll1, roll2) => roll1 + roll2;
// const scoreFrameArray = (array) => {
//   const [roll1, roll2] = array;
//   return roll1+roll2;
// }
// const scoreFrameArray2 = (array) => array[0] + array[1];

function scoreGame(game) {
  let totalScore = 0;
  for (let index = 0; index < 10; index++) {
    // if frame #(index) is a spare => score the spare
    // if frame #(index) is a strike => score the strike
    // else it's a "normal" frame
    totalScore += scoreFrame(...game[index]); // game[index] is expected to be [roll1, roll2]
  }
  return totalScore;
}

// 1 frame = 2 rolls => roll1, roll2

// 1 game = 10 frames => array of frames => array of 2 numbers

const testGame = [
  // Frame 1
  [8, 1],
  // Frame 2
  [5, 3],
  // Frame 3
  [8, 0],
  // Frame 4
  [2, 3],
  // Frame 5
  [5, 4],
  // Frame 6: SPARE
  [5, 5],
  // Frame 7
  [3, 4],
  // Frame 8: STRIKE
  [10], // same as [10, undefined]
  // Frame 9
  [7, 1],
  // Frame 10
  [6, 2],
];
console.log(`Game is `, testGame);
console.log(`Score for that game is `, scoreGame(testGame));
