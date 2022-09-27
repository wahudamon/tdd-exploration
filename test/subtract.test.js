import subtract from "../js/subtract";

describe("Subtract Tests", () => {
  test("properly subtract two numbers", () => {
    expect(subtract(4, 1)).toBe(3);
  });
});
