function scoreFrame(Roll1,Roll2) {
    let score = 0;
    for (let i = 1; i < 3; i++) {
       if (i===1) {
          score += Roll2;
       } 
    }
    return score;
}
scoreFrame(2, 3);
// OUtput: 5
