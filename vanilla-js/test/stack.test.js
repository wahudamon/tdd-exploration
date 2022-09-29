import Stack from "../js/stack";

describe("Stack Tests", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("is created empty", () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

  it("can push to the top", () => {
    stack.push("avocado");
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe("avocado");
  });

  it("can pop off", () => {
    stack.push("avocado");
    stack.pop();
    expect(stack.top).toBe(-1);
    expect(stack.peek).toBe(undefined);
    expect(stack.items).toEqual({});
  });
});
