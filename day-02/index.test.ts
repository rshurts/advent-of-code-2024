import { expect, test } from "bun:test";
import { numberOfSafeReports, numberOfSafeReportsWithTolerance } from "./index";

const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

test("number of safe reports", () => {
  expect(numberOfSafeReports(input)).toBe(2);
});

test.skip("number of safe reports with tolerance", () => {
  expect(numberOfSafeReportsWithTolerance(input)).toBe(4);
});
