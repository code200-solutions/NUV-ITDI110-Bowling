function scoreFrame(roll1, roll2){
  let score = 0;
  for (let i = 0; i < 3 ;i++){
    if(i===1){
        score += roll1;
    } else if (i===2){
        score += roll2;
    }
  }
  return score;
}
console.log(scoreFrame(3, 6));