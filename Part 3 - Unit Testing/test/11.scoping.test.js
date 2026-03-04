beforeAll(() => console.info("Before all 1"));
afterAll(() => console.info("After all 1"));
beforeEach(() => console.info("Before each 1"));
afterEach(() => console.info("After each 1"));

test("test outer 1", () => console.info("Test Outer 1"));
test("test outer 2", () => console.info("Test Outer 2"));
describe("inner scope", () => {
  beforeAll(() => console.info("Inner Before All 1"));
  afterAll(() => console.info("Inner After All 1"));
  beforeEach(() => console.info("Inner Before Each 1"));
  afterEach(() => console.info("Inner After Each 1"));
  test("test inner 1", () => console.info("Test inner 1"));
  test("test inner 2", () => console.info("Test inner 2"));
});
