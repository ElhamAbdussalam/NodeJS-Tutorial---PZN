import { getAllProducts, getProductById } from "../src/4.database";
import { ProductService } from "../src/5.product-service";

jest.mock("../src/4.database");

test("mock modules getProductById", () => {
  getProductById.mockImplementation((id) => {
    return { id: id, name: "Product Mock" };
  });

  const product = ProductService.findById(1);
  expect(product).toEqual({ id: 1, name: "Product Mock" });
});

test("mock modules getAllProducts", () => {
  const products = [
    { id: 1, name: "Product Mock 1" },
    { id: 1, name: "Product Mock 1" },
  ];
  getAllProducts.mockReturnValue(products);

  expect(ProductService.findAll()).toEqual(products);
});
