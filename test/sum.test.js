import sum from "../js/sum";

describe("Sum Tests", () => {
  test("properly adds two numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
