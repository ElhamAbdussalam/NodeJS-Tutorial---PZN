import { calculate } from "../src/1.sum";

test("test calculate", () => {
  const callback = jest.fn();

  calculate([10, 10, 10], callback);
  calculate([10, 10, 10, 10, 10], callback);
});
