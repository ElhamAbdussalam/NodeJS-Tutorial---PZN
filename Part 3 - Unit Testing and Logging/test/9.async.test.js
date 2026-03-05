import { sayHelloAsync } from "../src/2.async.js";

test("test async function", async () => {
  const result = await sayHelloAsync("Eko");
  expect(result).toBe("Hello Eko");
});

test("test async matchers", async () => {
  await expect(sayHelloAsync("Eko")).resolves.toBe("Hello Eko");
  await expect(sayHelloAsync()).rejects.toThrow("Name is empty");
});
