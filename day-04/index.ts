//@ts-expect-error -- bun can import text files
import input from "./input.txt" with { type: "text" };

export function toArrayOfArrays(input: string) {
  return input.split("\n").map((line) => line.split(""));
}

export function isInBounds(x: number, y: number, array: string[][]) {
  return y >= 0 && y < array.length && x >= 0 && x < array[0].length;
}

export function checkNextLetter(
  x: number,
  y: number,
  xDelta: number,
  yDelta: number,
  wordSearch: string[][],
  searchWord: string[],
  index: number,
) {
  if (
    isInBounds(x + xDelta, y + yDelta, wordSearch) &&
    wordSearch[y + yDelta][x + xDelta] === searchWord[index] &&
    index < searchWord.length
  ) {
    index++;
    x += xDelta;
    y += yDelta;
    return checkNextLetter(x, y, xDelta, yDelta, wordSearch, searchWord, index);
  }
  if (index === searchWord.length) {
    return true;
  }
  return false;
}

export function countOfXMAS(input: string) {
  const xmas = ["X", "M", "A", "S"];

  const wordSearch = toArrayOfArrays(input);
  let sum = 0;

  wordSearch.forEach((row, y) => {
    row.forEach((letter, x) => {
      if (letter === xmas[0]) {
        if (checkNextLetter(x, y, 0, -1, wordSearch, xmas, 1)) sum++;
        if (checkNextLetter(x, y, 1, -1, wordSearch, xmas, 1)) sum++;
        if (checkNextLetter(x, y, 1, 0, wordSearch, xmas, 1)) sum++;
        if (checkNextLetter(x, y, 1, 1, wordSearch, xmas, 1)) sum++;
        if (checkNextLetter(x, y, 0, 1, wordSearch, xmas, 1)) sum++;
        if (checkNextLetter(x, y, -1, 1, wordSearch, xmas, 1)) sum++;
        if (checkNextLetter(x, y, -1, 0, wordSearch, xmas, 1)) sum++;
        if (checkNextLetter(x, y, -1, -1, wordSearch, xmas, 1)) sum++;
      }
    });
  });

  return sum;
}

console.log("Sum of XMAS:", countOfXMAS(input));
