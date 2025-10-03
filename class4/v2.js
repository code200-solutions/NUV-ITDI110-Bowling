


function scoreGame(rolls) {
    let score = 0;
    let index = 0;

    for (let frame = 0; frame < 10; frame++) {
        if (rolls[index] === 10) {
            score += 10 + rolls[index + 1] + rolls[index + 2];
            index += 1;
        } else if (rolls[index] + rolls[index + 1] === 10) {
            score += 10 + rolls[index + 2];
            index += 2;
        } else {
            score += rolls[index] + rolls[index + 1];
            index += 2;
        }
    }

    return score;
}const rolls = [10, 7, 3, 9, 0, 10, 10, 10, 2, 3, 6, 4, 7, 3, 3];
console.log(scoreGame(rolls));

