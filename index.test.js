describe("rock, paper, scissors", () => {
    it("should say left wins for rock vs. scissors", () => {
        const left = "rock";
        const right = "scissors";

        const outcome = rps(left, right);

        expect(outcome).toBe("left");
    });
});