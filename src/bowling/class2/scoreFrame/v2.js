function ScoreFrame(roll1, roll2) {
  let score = roll1 + roll2;
  return score;
}
console.log(`Frame rolls: 3,5 => score = ${ScoreFrame(3, 5)}`);
