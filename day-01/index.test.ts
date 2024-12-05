import { expect, test } from "bun:test";
import { sumOfDistances, sumOfSimilarities } from "./index";

const input = `3   4
4   3
2   5
1   3
3   9
3   3`;

test("sum of distances", () => {
  expect(sumOfDistances(input)).toBe(11);
});

test("sum of similarities", () => {
  expect(sumOfSimilarities(input)).toBe(31);
});
