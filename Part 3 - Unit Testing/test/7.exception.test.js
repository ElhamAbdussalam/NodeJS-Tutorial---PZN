class MyException extends Error {}

function callMe(name) {
  if (name === "Elham") {
    throw new MyException("Ups");
  } else {
    return "OK";
  }
}

test("exception", () => {
  expect(() => callMe("Elham")).toThrow();
  expect(() => callMe("Elham")).toThrow(MyException);
  expect(() => callMe("Elham")).toThrow("Ups");
});
