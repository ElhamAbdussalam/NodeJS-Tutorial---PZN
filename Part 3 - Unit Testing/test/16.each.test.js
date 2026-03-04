import { sumAll } from "../src/1.sum.js";

test("sumAll(10,10,10)", () => {
  expect(sumAll([10, 10, 10])).toBe(30);
});

test("sumAll(10,10,10, 10, 10)", () => {
  expect(sumAll([10, 10, 10, 10, 10])).toBe(50);
});
