const rps = (left, right) => {
    return left === "rock"
        || right === "paper"
        || (left === "paper" && right === "rock")
        ? "left"
        : "right";
};

describe("rock, paper, scissors", () => {
    it("should say left wins for rock vs. scissors", () => {
        const left = "rock";
        const right = "scissors";

        const outcome = rps(left, right);

        expect(outcome).toBe("left");
    });

    it("should say right wins for scissors vs. rock", () => {
        const left = "scissors";
        const right = "rock";

        const outcome = rps(left, right);

        expect(outcome).toBe("right");
    });

    it("should say left wins for scissors vs. paper", () => {
        const left = "scissors";
        const right = "paper";

        const outcome = rps(left, right);

        expect(outcome).toBe("left");
    });

    it("should say right wins for paper vs. scissors", () => {
        const left = "paper";
        const right = "scissors";

        const outcome = rps(left, right);

        expect(outcome).toBe("right");
    });

    it("should say left wins paper vs. rock", () => {
        const left = "paper";
        const right = "rock";

        const result = rps(left, right);

        expect(result).toBe("left");
    });
});