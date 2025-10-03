class FrameV2 {
  firstroll: number;
  secondroll?: number;

  constructor(firstroll: number = 0, secondroll: number = 0) {
    this.firstroll = firstroll;
    this.secondroll = secondroll;
  }

  isSpare(): boolean {
    return (
      this.firstroll + (this.secondroll ?? 0) === 10 &&
      this.firstroll !== 10
    );
  }

  isStrike(): boolean {
    return this.firstroll === 10;
  }

  getScore(): number {
    return this.firstroll + (this.secondroll ?? 0);
  }
}

class SpareFrame extends FrameV2 {
  constructor(firstroll: number) {
    super(firstroll, 10 - firstroll);
  }
}

class StrikeFrame extends FrameV2 {
  constructor() {
    super(10, 0);
  }
}

class Game {
  frames: FrameV2[];

  constructor(frames: FrameV2[]) {
    if (frames.length !== 10) {
      throw new Error(`A game must have exactly 10 frames`);
    }
    this.frames = frames;
  }
}

// calculate the scoreGame of the game
function scoreGame(frames: FrameV2[]): number {
  let score = 0;

  for (let i = 0; i < frames.length; i++) {
    const frame = frames[i];
    const next = frames[i + 1];
    const nextNext = frames[i + 2];

    if (frame.isStrike()) {
      score += 10;
      if (next) {
        score += next.firstroll;
        score += next.isStrike() && nextNext
          ? nextNext.firstroll
          : next.secondroll ?? 0;
      }
    } else if (frame.isSpare()) {
      score += 10;
      if (next) score += next.firstroll;
    } else {
      score += frame.getScore();
    }
  }

  return score;
}

// Example of the test game

const testGame: FrameV2[] = [
  new FrameV2(8, 1),
  new FrameV2(5, 3),
  new FrameV2(8, 0),
  new FrameV2(2, 3),
  new FrameV2(5, 4),
  new SpareFrame(5),
  new FrameV2(3, 4),
  new StrikeFrame(),
  new FrameV2(7, 1),
  new FrameV2(6, 2),
];

console.log(`Game is:`, testGame);
console.log(`total score is:`, scoreGame(testGame));

