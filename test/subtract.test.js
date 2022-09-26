describe("Subtract Tests", () => {
  let subtract;

  beforeEach(() => {
    subtract = require("../js/subtract");
  });

  it("properly subtract two numbers", () => {
    expect(subtract(4, 1)).toBe(3);
  });
});
