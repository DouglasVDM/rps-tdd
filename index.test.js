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
  // Check if the outcome represented by "left" can beat the outcome represented by "right".
  // If it can, return "left"; otherwise, return "right".
  if (outcomes[left].beats.includes(right)) {
    // If the outcome represented by "left" has a list that includes the outcome represented by "right",
    // then the outcome represented by "left" wins
    return "left";
  } else {
    // If the outcome represented by "left" does not have "right" in its list of outcomes it can beat,
    // then the outcome represented by "left" cannot beat the outcome represented by "right"
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

  // TEST 8
  it("should say right wins for lizard vs. rock", () => {
    const left = "lizard";
    const right = "rock";

    const outcome = rps(left, right);

    expect(outcome).toBe("right");
  });

  // TEST 9
  it("should say left wins for spock vs. rock", () => {
    const left = "spock";
    const right = "rock";

    const outcome = rps(left, right);

    expect(outcome).toBe("left");
  });

  // TEST 10
  it("should say right wins for rock vs. spock", () => {
    const left = "rock";
    const right = "spock";

    const outcome = rps(left, right);

    expect(outcome).toBe("right");
  });

  // TEST 11
  it("should say left wins for spock vs. scissors", () => {
    const left = "spock";
    const right = "scissors";
  
    const outcome = rps(left, right);
  
    expect(outcome).toBe("left");
  });
  
  // TEST 12
  it("should say right wins for scissors vs. spock", () => {
    const left = "scissors";
    const right = "spock";
  
    const outcome = rps(left, right);
  
    expect(outcome).toBe("right");
  });
  
  // TEST 13
  it("should say right wins for spock vs. paper", () => {
    const left = "spock";
    const right = "paper";
  
    const outcome = rps(left, right);
  
    expect(outcome).toBe("right");
  });
  
  // TEST 14
  it("should say left wins for paper vs. spock", () => {
    const left = "paper";
    const right = "spock";
  
    const outcome = rps(left, right);
  
    expect(outcome).toBe("left");
  });
  
  // TEST 15
  it("should say right wins for spock vs. lizard", () => {
    const left = "spock";
    const right = "lizard";
  
    const outcome = rps(left, right);
  
    expect(outcome).toBe("right");
  });
  
  // TEST 16
  it("should say leftt wins for lizard vs. spock", () => {
    const left = "lizard";
    const right = "spock";
  
    const outcome = rps(left, right);
  
    expect(outcome).toBe("left");
  });
  
  ["rock", "paper", "scissors", "lizard", "spock"].forEach((both) => {
    it(`should say draw for ${both} vs. ${both}`, () => {
      expect(rps(both, both)).toBe("draw");
    });
  });
});
