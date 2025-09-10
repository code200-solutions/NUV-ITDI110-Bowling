/**
 * Function use to calculate the score of a spare.
 *
 * @param roll1 nb pins down in the first roll
 * @param roll2 nb pins down in the second roll
 * @returns returns 10 for a spare, throw an error if not a spare
 */
function scoreSpare(roll1, roll2) {
  // throw new Error(`Not a spare`);
  // return 10;
}

const score = scoreSpare(3, 7);
console.log(`Frame rolls: 3,5 => score = ${score}`);
