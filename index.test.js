const rps = (left, right) => {
  const outcomes = {
    rock: { beats: ["scissors", "lizard"] },
    paper: { beats: ["rock", "spock"] },
    scissors: { beats: ["paper", "lizard"] },
    lizard: { beats: ["paper", "spock"] },
    spock: { beats: ["rock", "scissors"] },
  };

  if (left === right) {
    return "draw";
  }

  if (outcomes[left].beats.includes(right)) {
    return "left";
  } else {
    return "right";
  }
};

describe("Rock, Paper, Scissors, Lizard, Spock", () => {
  
    // TEST 1
  it("should say left wins for rock vs. scissors", () => {
    const left = "rock";
    const right = "scissors";

    const outcome = rps(left, right);

    expect(outcome).toBe("left");
  });

  // TEST 2
  it("should say right wins for scissors vs. rock", () => {
    const left = "scissors";
    const right = "rock";

    const result = rps(left, right);

    expect(result).toBe("right");
  });

  // TEST 3
  it("should say left wins for scissots vs. paper", () => {
    const left = "scissors";
    const right = "paper";

    const result = rps(left, right);

    expect(result).toBe("left");
  });

  // TEST 4
  it("should say right wins for paper vs. scissors", () => {
    const left = "paper";
    const right = "scissors";

    const result = rps(left, right);

    expect(result).toBe("right");
  });

  // TEST 5
  it("should say left wins for paper vs. rock", () => {
    const left = "paper";
    const right = "rock";

    const result = rps(left, right);

    expect(result).toBe("left");
  });

  // TEST 6
  it("should say right wins for rock vs, paper", () => {
    const left = "rock";
    const right = "paper";

    const result = rps(left, right);

    expect(result).toBe("right");
  });

  // TEST 7
  it("should say left wins for rock vs. lizard", () => {
    const left = "rock";
    const right = "lizard";

    const outcome = rps(left, right);

    expect(outcome).toBe("left");
  });

   ["rock", "paper", "scissors", "lizard", "spock"].forEach((both) => {
    it(`should say draw for ${both} vs. ${both}`, () => {
      expect(rps(both, both)).toBe("draw");
    });
  });
});
