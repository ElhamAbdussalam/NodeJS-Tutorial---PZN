test("test toBe", () => {
  let name = "Elham";
  let hello = `Hello ${name}`;

  expect(hello).toBe("Hello Elham");
});

test("test toEquals", () => {
  let person = { id: "elham" };
  Object.assign(person, { name: "Elham" });

  expect(person).toEqual({ id: "elham", name: "Elham" });
});
