import { sum } from "../src/1.sum";

beforeEach(() => {
  console.info("Before each test");
});

afterEach(() => {
  console.info("After each test");
});

test("first test", () => {
  expect(sum(10, 10)).toBe(20);
});

test("second test", () => {
  expect(sum(10, 10)).toBe(20);
});
