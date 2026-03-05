test("array", () => {
  const names = ["Muhammad", "Elham", "Abdussalam"];
  expect(names).toContain("Elham");
  expect(names).toEqual(["Muhammad", "Elham", "Abdussalam"]);

  const persons = [{ names: "Elham" }, { names: "Abdussalam" }];
  expect(persons).toContainEqual({ names: "Elham" });
  expect(persons).toEqual([{ names: "Elham" }, { names: "Abdussalam" }]);
});
