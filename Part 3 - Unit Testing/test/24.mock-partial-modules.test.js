import { getAllProducts } from "../src/4.database";
import { ProductService } from "../src/5.product-service";

jest.mock("../src/4.database", () => {
  const originalModule = jest.requireActual("../src/4.database");

  return {
    __esModule: true,
    ...originalModule,
    getAllProducts: jest.fn(),
  };
});

test("mock modules getAllProducts", () => {
  const products = [
    { id: 1, name: "Product Mock 1" },
    { id: 2, name: "Product Mock 1" },
  ];
  getAllProducts.mockReturnValue(products);

  expect(ProductService.findAll()).toEqual(products);
});

test.failing("mock modules getProductById", () => {
  ProductService.findById(1);
});
