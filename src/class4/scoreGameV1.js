function frame(roll1, roll2) {

    if (roll1 === undefined) {
        roll1 = 0;
    }
    if (roll2 === undefined) {
        roll2 = 0;
    }

    let score = roll1 + roll2;
    return score
}


function isStrike(roll1, roll2) {

    if (roll1 === 10) {
        return "STRIKE!";
    } else {
        return "NOT A STRIKE";
    }
}


function isSpare(roll1, roll2) {

    if (roll1 !== 10 && (roll1 + roll2 === 10)) {
        return "SPARE";
    } else {
        return "NOT A SPARE";
    }
}



function spareFrame(roll1, roll2) {
    let score = 0;

    if (isSpare(rolll1, roll2)) {
        score = 10;
    } else {
        score = roll1 + roll2;
    }
    return score;
}


function strikeFrame(roll1, roll2) {
    let score = 0;

    if (isStrike(roll1, roll2)) {
        score = 10;
    } else {
        score = roll1 + roll2;
    }
    return score;
}



function scoreGame(game) {
    let total = 0;

    for (let i = 0; i < 10; i++) {
        let frame1 = game[i];
        let frame2 = game[i+1];
        let frame3 = game[i+2];

        if (frame2 === undefined) {
            frame2 = 0;
        }
        if (frame3 === undefined) {
            frame3 = 0;
        }

        let roll1 = frame1[0];
        let roll2 = frame1[1];

        if (i === 9) {
            let roll3 = frame1[2];
            if (roll3 === undefined) {
                roll3 = 0
            }
            total = total + frame(roll1, roll2) + roll3;
        }
        else if (isStrike(roll1, roll2)) {
            total = total + strikeFrame(roll1, roll2);

            if (isStrike(frame2[0], frame2[1])) {
                total = total + 0;
                total = total + frame3[0];
            } else {
                total = total + [0];
                total = total + frame2[1];
            }
        }
        else if (isSpare(roll1, roll2)) {
            total = total + frame2[0];
        }

        else {
            total = total + frame(roll1, roll2);
        }
    }
    return total;
}



let game1 = [[7,3], [4,2], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0]];
console.log("Game 1: " + scoreGame(game1));

let game2 = [[10,0], [7,2], [0,0], [0,0], [0,0], [0,0], [3,1], [5,5], [1,2], [0,0]];
console.log("Game 2: " + scoreGame(game2));
1
let game3 = [[7,3], [4,2], [0,0], [0,0], [7,1], [2,2], [10,0], [5,3], [2,6], [1,1]];
console.log("Game 3: " + scoreGame(game3));