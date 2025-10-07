class Frame {
  roll1: number;
  roll2: number;

  constructor(n1: number, n2: number) {
    this.roll1 = n1;
    this.roll2 = n2;
  }

  score(): number {
    return this.roll1 + this.roll2;
  }

  isStrike(): boolean {
    return this.roll1 === 10;
  }

  isSpare(): boolean {
    return this.roll1 + this.roll2 === 10 && this.roll2 !== 10;
  }
}

class StrikeFrame extends Frame {
  constructor(roll1: number, roll2: number) {
    super(10, 0);
  }

  strikeWithBonus(nextTwoRolls: number[]): number {
    return 10 + nextTwoRolls.reduce((a, b) => a + b, 0);
  }
}

class SpareFrame extends Frame {
  constructor(n1: number, n2: number) {
    super(n1, n2);
  }

  spareWithBonus(nextRoll: number): number {
    return 10 + nextRoll;
  }
}

class NormalFrame extends Frame {
  constructor(n1: number, n2: number) {
    super(n1, n2);
  }

  score(): number {
    return this.roll1 + this.roll2;
  }
}

class Game {
  frames: Frame[] = [];

  addFrame(frame: Frame) {
    if (this.frames.length >= 10) {
      throw new Error("Cannot add more than 10 frames");
    }
    this.frames.push(frame);
  }

  private getNextRolls(frameIndex: number, count: number): number[] {
    const rolls: number[] = [];
    let remaining = count;

    for (let i = frameIndex + 1; i < this.frames.length && remaining > 0; i++) {
      const frame = this.frames[i];
      rolls.push(frame.roll1);
      remaining--;
      if (remaining > 0 && !frame.isStrike()) {
        rolls.push(frame.roll2);
        remaining--;
      }
    }
    return rolls;
  }

  score(): number {
    let total = 0;
    for (let i = 0; i < this.frames.length; i++) {
      const frame = this.frames[i];
      if (frame instanceof StrikeFrame) {
        const bonusRolls = this.getNextRolls(i, 2);
        total += frame.strikeWithBonus(bonusRolls);
      } else if (frame instanceof SpareFrame) {
        const nextRolls = this.getNextRolls(i, 1);
        total += frame.spareWithBonus(nextRolls[0] || 0);
      } else {
        total += frame.score();
      }
    }
    return total;
  }
}

const scoreOfGame = [
  [8, 1],  // Frame 1
  [5, 3],  // Frame 2
  [8, 0],  // Frame 3
  [2, 3],  // Frame 4
  [5, 4],  // Frame 5
  [5, 5],  // Frame 6 (Spare)
  [3, 4],  // Frame 7
  [10],    // Frame 8 (Strike)
  [7, 1],  // Frame 9
  [6, 2],  // Frame 10
];


function createFrame(rolls: number[]): Frame {
  const [roll1, roll2 = 0] = rolls;
  if (roll1 === 10) {
    return new StrikeFrame(roll1, roll2);
  } else if (roll1 + roll2 === 10) {
    return new SpareFrame(roll1, roll2);
  } else {
    return new NormalFrame(roll1, roll2);
  }
}


const testGame = new Game();
for (const frameData of scoreOfGame) {
  const frame = createFrame(frameData);
  testGame.addFrame(frame);
}



console.log("Frames:", testGame.frames);
console.log("Total score:", testGame.score());