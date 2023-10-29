import { sum } from "../components/exampleTest";

test("Sum function should calculate the sum of two Numbers ", () => {
  const result = sum(5, 10);

  //assertion
  expect(result).toBe(15);
});
