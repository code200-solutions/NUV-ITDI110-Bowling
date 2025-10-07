class Frame {
    roll1: number | undefined;
    roll2: number | undefined;

    constructor(roll1?: number, roll2?: number) {
        this.roll1 = roll1 ?? 0;
        this.roll2 = roll2 ?? 0;
    }
    
    getScore() {
        return (this.roll1 ?? 0) + (this.roll2 ?? 0);
    }
}

class StrikeFrame extends Frame {
    constructor() {
        super(10, 0)
    }
    getScore() {
        return 10;
    }
}

class SpareFrame extends Frame {
    constructor(roll1?: number, roll2?: number) {
        super(roll1, roll2)
    }
    getScore() {
        return 10;
    }
}

class Game {
    frames: number[][];
    score: number;

    constructor() {
        this.frames = [];
        this.score = 0;
    }

    addFrame(roll1: number | undefined, roll2: number | undefined) {
        const r1 = roll1 ?? 0;
        const r2 = roll2 ?? 0;
        return this.frames.push([r1, r2])
    }
}

function scoreGame(game: Game) {

    const rolls: number[] = [];
    
    for (let i = 0; i < game.frames.length; i++) {
        let frame = game.frames[i];
        for (let j = 0; j < frame.length; j++) {
            rolls.push(frame[j]);
        }
    }

    let total = 0;
    let rollIndex = 0;

    for (let frame = 1; frame <= 10; frame++) {
        const first = rolls[rollIndex] ?? 0;

        if (first === 10) {
            const bonus1 = rolls[rollIndex + 1] ?? 0;
            const bonus2 = rolls[rollIndex + 2] ?? 0;
            total += 10 + bonus1 + bonus2;
            rollIndex += 1;
            continue;
        }

        const second = rolls[rollIndex + 1] ?? 0;
        const framePins = first + second;

        if (framePins === 10) {
            const bonus = rolls[rollIndex + 2] ?? 0;
            total += 10 + bonus
        } else {
            total += framePins;
        }
        rollIndex += 2;
    }
    return total;
}




// const testGame = new Game([[7, 1], [3, 4], [0, 0], [10, 0], [1, 3], [4, 2], [7, 3], [1, 2], [2, 0], [0, 0]]);
const testGame = new Game();

testGame.addFrame(7, 1);
testGame.addFrame(3, 4);
testGame.addFrame(0, 0);
testGame.addFrame(10, 0);
testGame.addFrame(1, 3);
testGame.addFrame(4, 2);
testGame.addFrame(7, 3);
testGame.addFrame(1, 2);
testGame.addFrame(2, 0);
testGame.addFrame(0, 0);

console.log(testGame.frames);
console.log(scoreGame(testGame))
