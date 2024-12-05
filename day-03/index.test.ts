import { expect, test } from "bun:test";
import { sumOfConditionalMultiplication, sumOfMultiplication } from "./index";

const input =
  "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";

test("sum of multiplaction", () => {
  expect(sumOfMultiplication(input)).toBe(161);
});

test("sum of multiplaction with do and don't", () => {
  expect(sumOfConditionalMultiplication(input)).toBe(48);
});
