import { UserRepository } from "../src/6.user-repository";
import { UserService } from "../src/7.user-service";

const repository = new UserRepository();
const service = new UserService(repository);

test("test mock class findById", () => {
  const user = { id: 1, name: "Eko" };
  const findByIdMock = jest.spyOn(repository, "findById");
  findByIdMock.mockReturnValueOnce(user);

  expect(service.findById(1)).toEqual(user);
  expect(repository.findById).toHaveBeenCalled();
});
