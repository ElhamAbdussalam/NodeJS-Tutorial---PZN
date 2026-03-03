test("string", () => {
  const name = "Elham";

  expect(name).toBe("Elham");
  expect(name).toEqual("Elham");
  expect(name).toMatch(/ham/);
});
