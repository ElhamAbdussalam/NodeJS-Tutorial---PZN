import { UserRepository } from "../src/6.user-repository";
import { UserService } from "../src/7.user-service";

jest.mock("../src/6.user-repository");

const repository = new UserRepository();
const service = new UserService(repository);

test("test mook class save", () => {
  const user = { id: 1, name: "Elham" };
  service.save(user);
  expect(repository.save).toHaveBeenCalled();
});

test("test mock class findById", () => {
  const user = { id: 1, name: "Elham" };
  repository.findById.mockReturnValueOnce(user);
  expect(service.findById(1)).toEqual(user);
  expect(repository.findById).toHaveBeenCalled();
});

test("test mock class findAll", () => {
  const users = [
    { id: 1, name: "Elham" },
    { id: 2, name: "Abdussalam" },
  ];
  repository.findAll.mockReturnValueOnce(users);
  expect(service.findAll()).toEqual(users);
  expect(repository.findAll).toHaveBeenCalled();
});
