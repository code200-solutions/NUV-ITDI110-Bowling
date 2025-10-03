function ScoreFrame(roll1, roll2) {
  let score = 0;
  for (let i = 1; i < 3; i++) {
    if (i === 1) {
      score += roll1;
    } else if (i === 2) {
      score += roll2;
    }
  }
  return score;
}
const score = ScoreFrame(3, 5);
const message = `(back quote) Frame rolls: 3,5 => score = ${score} > good job`;
const message2 =
  '(single quote) Frame rolls: 3,5 => score = ' + score + ' > good job';
console.log(message);
console.log(message2);
// same as
// console.log('Frame rolls: 3,5 => score = ', ScoreFrame(3, 5), '> good job');
