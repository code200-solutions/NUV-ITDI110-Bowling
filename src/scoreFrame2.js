function ScoreFrame(roll1,roll2) {
    let score = 0;
    for (let i = 1; i < 3; i++) {
        if (i===1) {
            score+=roll1;
        }else if (i===2) {
            score +=roll2;
        }


        
    }
    return score;
    }

    const test = score(3,6);
    console.log(score)