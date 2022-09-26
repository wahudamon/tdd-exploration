describe("Clone Array Tests", () => {
  let cloneArray;

  beforeEach(() => {
    cloneArray = require("../js/cloneArray");
  });

  it("properly clones array", () => {
    let array = [1, 2, 3];
    expect(cloneArray(array)).toEqual(array);
    expect(cloneArray(array)).not.toBe(array);
  });
});
