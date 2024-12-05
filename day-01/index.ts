//@ts-expect-error -- bun can import text files
import input from "./input.txt" with { type: "text" };

function prepList(input: string) {
  const listOne: number[] = [];
  const listTwo: number[] = [];
  const lines: string[] = input.split("\n");

  lines.forEach((line) => {
    const splitLine = line.split("   ");
    listOne.push(parseInt(splitLine[0]));
    listTwo.push(parseInt(splitLine[1]));
  });

  listOne.sort();
  listTwo.sort();

  return [listOne, listTwo];
}

export function sumOfDistances(input: string) {
  const [listOne, listTwo] = prepList(input);
  let sumOfDistances = 0;

  listOne.forEach((value, index) => {
    const distance = Math.abs(value - listTwo[index]);
    sumOfDistances += distance;
  });

  return sumOfDistances;
}

export function sumOfSimilarities(input: string) {
  const [listOne, listTwo] = prepList(input);
  let sumOfSimilarities = 0;

  listOne.forEach((valueOne, index) => {
    const similarity = listTwo.filter((valueTwo) => valueTwo === valueOne);
    const similarityScore = valueOne * similarity.length;
    sumOfSimilarities += similarityScore;
  });

  return sumOfSimilarities;
}

console.log("Sum of distances:", sumOfDistances(input));
console.log("Sum of similarities:", sumOfSimilarities(input));
