import cloneArray from "../js/cloneArray";

describe("Clone Array Tests", () => {
  test("properly clones array", () => {
    let array = [1, 2, 3];
    expect(cloneArray(array)).toEqual(array);
    expect(cloneArray(array)).not.toBe(array);
  });
});
