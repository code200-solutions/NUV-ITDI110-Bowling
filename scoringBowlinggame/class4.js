class bowlingGame{
constructor(){
this.rolls=[];
}
roll (pins){
    this.rolls.push(pins);
}


Score(){
let result = 0;
let rollindex =0;
for( let frame =0; frame<10;frame++) {

if ( this.isStrike(rollindex)) {
result += 10 + this.strikeBonus(rollindex);
rollindex+=1;
} else if (this.isSpare(rollindex)) {
 result += 10 + this.spareBonus (rollindex);
 rollindex+=2;
}else{
     result+=this.sumOfFrame(rollindex);
     rollindex+=2;
    }

}
 return result;
}
isStrike(rollindex){
    return this.rolls[rollindex] ===10;
}
isSpare(rollindex){
    return this.rolls[rollindex]+this.rolls[rollindex +1]===10;
}
strikeBonus (rollindex){
    return this.rolls[rollindex+1] + this.rolls[rollindex+2];
}
spareBonnus(rollindex){
    return this.rolls[rollindex +2];
}
sumOfFrame(rollindex){
    return this.rolls[rollindex]+this.rolls[rollindex+1];
}

}
