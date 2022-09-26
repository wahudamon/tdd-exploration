describe("Sum Tests", () => {
  let sum;

  beforeEach(() => {
    sum = require("../js/sum");
  });

  it("properly adds two numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
