
function isStrike(frameScore) {
    return frameScore === 10;
}


function isSpare(firstRoll, secondRoll) {
    return (firstRoll + secondRoll) === 10 && firstRoll !== 10;
}


function calculateBonus(frameType, nextRolls) {
    if (frameType === 'strike') {
       
        return nextRolls.slice(0, 2).reduce((a, b) => a + b, 0);
    } else if (frameType === 'spare') {
        
        return nextRolls[0];
        } else {
        return 0;
    }
}


const firstRoll = 10;
const secondRoll = 0; 

console.log("Is strike? " + isStrike(firstRoll)); 
console.log("Is spare? " + isSpare(firstRoll, secondRoll)); 


const nextRolls = [4, 5];

const frameType = isStrike(firstRoll) ? 'strike' : (isSpare(firstRoll, secondRoll) ? 'spare' : 'normal');

const bonus = calculateBonus(frameType, nextRolls);
console.log("Frame type: " + frameType);
console.log("Bonus: " + bonus);