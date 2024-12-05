//@ts-expect-error -- bun can import text files
import input from "./input.txt" with { type: "text" };

export function sumOfMultiplication(input: string) {
  const regex = /mul\(\d{1,3},\d{1,3}\)/g;
  const matches = input.match(regex);

  const sum = matches?.reduce((accumulator, match) => {
    const parts = match.split(",");
    const multicand = parseInt(parts[0].slice(4));
    const multiplier = parseInt(parts[1].slice(0, -1));
    return accumulator + multicand * multiplier;
  }, 0);

  return sum;
}

export function sumOfConditionalMultiplication(input: string) {
  return 0;
}

console.log("Sum of multiplication:", sumOfMultiplication(input));
