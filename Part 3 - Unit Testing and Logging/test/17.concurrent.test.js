import { sayHelloAsync } from "../src/2.async.js";

test.concurrent("concurret 1", async () => {
  await expect(sayHelloAsync("Elham")).resolves.toBe("Hello Elham");
});

test.concurrent("concurret 2", async () => {
  await expect(sayHelloAsync("Elham")).resolves.toBe("Hello Elham");
});

test.concurrent("concurret 3", async () => {
  await expect(sayHelloAsync("Elham")).resolves.toBe("Hello Elham");
});
