const { sum } = require("../src/1.sum");

test("2 + 3 harus 5", () => {
  expect(sum(2, 3)).toBe(5);
});
