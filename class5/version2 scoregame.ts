class Frame {
    roll1:number;
    roll2:number;
    constructor(roll1,roll2){
        this.roll1 =roll1;
        this.roll2 =roll2;
    }
    
        isSpare() {
    const rolls= (this.roll1 || 0) + (this.roll2 || 0);
    return rolls === 10 && this.roll1 !== 10;
}
    
isStrike() {
    return this.roll1 === 10;
}
    getscore () {
    return (this.roll1 || 0) + (this.roll2 || 0);
}
}

const Game = (game) => {
    let score = 0;
    for (let i = 0; i < 10; i++) {
        const frame = game[i];
        
        if (frame.isStrike()) {
            score += 10 + (game[i + 1]?.roll1 || 0) + (game[i + 1]?.isStrike() ? (game[i + 2]?.roll1 || 0) : (game[i + 1]?.roll2 || 0));
        }
        
        else if (frame.isSpare()) {
            score += 10 + (game[i + 1]?.roll1 || 0);
        }
        
        else {
            score += frame.getScore();
        }
    }
    return score;
};
class FrameV1 {
    roll1: number;
    roll2: number;
    constructor(roll1: number, roll2 = 0) {
        this.roll1 = roll1;
        this.roll2 = roll2;
    }
    isStrike() {
        return this.roll1 === 10;
    }
    isSpare() {
        return (this.roll1 + this.roll2 === 10) && this.roll1 !== 10;
    }
    getScore() {
        return this.roll1 + this.roll2;
    }
}
const testGame = [
    new Frame(8, 1),
    new Frame(5, 3),
    new Frame(8, 0),
    new Frame(2, 3),
    new Frame(5, 4),
    new Frame(5, 5),
    new Frame(3, 4),
    new Frame(10),
    new Frame(7, 1),
    new Frame(6, 2),
];
console.log("Game is:", rolls);
console.log("Total score is:", scoreGame(testGame));









