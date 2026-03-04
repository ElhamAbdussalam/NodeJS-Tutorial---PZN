import { sumAll } from "../src/1.sum.js";

describe("when call sumAll([10,10,10])", () => {
  it("should get 30", function () {
    expect(sumAll([10, 10, 10])).toBe(30);
  });
});
