const scoreGame = (game) => {
  let score = 0;

  for (let i = 0; i < 10; i++) {
    const frame = game[i];
    const nextFrame = game[i + 1];

    const roll1 = frame[0];
    const roll2 = frame[1] ?? 0;

    if (roll1 === 10) {

      let bonus1 = 0;
      let bonus2 = 0;

      if (nextFrame) {
        bonus1 = nextFrame[0];

        }else {
          bonus2 = nextFrame[1] ?? 0;
      }

      score += 10 + bonus1 + bonus2;
    } else if (roll1 + roll2 === 10) {
      let bonus = 0;
      if (nextFrame) {
        bonus = nextFrame[0];
      }
      score += 10 + bonus;
    } else {
      score += roll1 + roll2;
    }
  }

  return score;
};

const testGame = [
  [8, 1],
  [5, 3],
  [8, 0],
  [2, 3],
  [5, 4],
  [5, 5],
  [3, 4],
  [10], 
  [7, 1],
  [6, 2],
];

console.log(`Game is:`, testGame);
console.log("Total score:", scoreGame(testGame));