import { sayHello } from "../src/3.sayHello.js";

test("sayHello success", () => {
  expect(sayHello("Elham")).toBe("Hello Elham");
});

test.failing("sayHello error", () => {
  sayHello(null);
});
