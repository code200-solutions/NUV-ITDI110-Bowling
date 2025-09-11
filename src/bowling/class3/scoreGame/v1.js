const scoreFrame = (roll1, roll2) => (roll1 ?? 0) + (roll2 ?? 0);
const isSpare = (frame) => frame[0] + frame[1] === 10;
const isStrike = (frame) => frame[0] === 10;

const scoreGame = (game) => {
  let totalScore = 0;
  for (let index = 0; index < 10; index++) {
    const frame = game[index];
    const nextFrame = game[index + 1];

    console.log(`Frame #${index + 1} ${frame}`);

    if (isSpare(frame)) {
      console.log(`\tFrame #${index + 1} Is spare`);

      const baseScore = scoreFrame(...frame); // always 10
      const bonusScore = nextFrame[0];
      totalScore += baseScore + bonusScore;
    } else if (isStrike(frame)) {
      console.log(`\tFrame #${index + 1} Is strike`);

      const baseScore = scoreFrame(...frame); // always 10
      console.log(`\t\tBase score = ${baseScore}`);
      const bonusScore = nextFrame[0] + nextFrame[1];
      console.log(`\t\tBonus score = ${bonusScore}`);
      totalScore += baseScore + bonusScore;
    } else {
      console.log(`\tFrame #${index + 1} Is normal`);

      totalScore += scoreFrame(...game[index]); // game[index] is expected to be [roll1, roll2]
    }
    console.log(`\tFrame #${index + 1} current score is ${totalScore}\n`);
  }
  return totalScore;
};

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
