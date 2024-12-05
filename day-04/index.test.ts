import { expect, test } from "bun:test";
import { countOfXMAS, isInBounds, toArrayOfArrays } from "./index";

const input = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;

test("count of XMAS", () => {
  expect(countOfXMAS(input)).toBe(18);
});

test("string to array of arrays", () => {
  expect(toArrayOfArrays(input)).toEqual([
    ["M", "M", "M", "S", "X", "X", "M", "A", "S", "M"],
    ["M", "S", "A", "M", "X", "M", "S", "M", "S", "A"],
    ["A", "M", "X", "S", "X", "M", "A", "A", "M", "M"],
    ["M", "S", "A", "M", "A", "S", "M", "S", "M", "X"],
    ["X", "M", "A", "S", "A", "M", "X", "A", "M", "M"],
    ["X", "X", "A", "M", "M", "X", "X", "A", "M", "A"],
    ["S", "M", "S", "M", "S", "A", "S", "X", "S", "S"],
    ["S", "A", "X", "A", "M", "A", "S", "A", "A", "A"],
    ["M", "A", "M", "M", "M", "X", "M", "M", "M", "M"],
    ["M", "X", "M", "X", "A", "X", "M", "A", "S", "X"],
  ]);
});

test("is in bounds", () => {
  expect(isInBounds(0, 0, toArrayOfArrays(input))).toBe(true);
  expect(isInBounds(10, 0, toArrayOfArrays(input))).toBe(false);
  expect(isInBounds(1, 9, toArrayOfArrays(input))).toBe(true);
  expect(isInBounds(5, 10, toArrayOfArrays(input))).toBe(false);
});
