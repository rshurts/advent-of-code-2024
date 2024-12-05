//@ts-expect-error -- bun can import text files
import input from "./input.txt" with { type: "text" };

export function numberOfSafeReports(input: string) {
  const lines: string[] = input.split("\n");

  let safeReports = 0;

  lines.forEach((line) => {
    const entries = line.split(" ");
    const numbericalEntries = entries.map((entry) => parseInt(entry));

    let ok = false;
    let increasing = numbericalEntries[0] < numbericalEntries[1];
    for (let i = 1; i < numbericalEntries.length; i++) {
      if (
        increasing &&
        numbericalEntries[i - 1] < numbericalEntries[i] &&
        numbericalEntries[i] - numbericalEntries[i - 1] <= 3
      ) {
        ok = true;
      } else if (
        !increasing &&
        numbericalEntries[i - 1] > numbericalEntries[i] &&
        numbericalEntries[i - 1] - numbericalEntries[i] <= 3
      ) {
        ok = true;
      } else {
        ok = false;
        break;
      }
    }

    if (ok) {
      safeReports++;
    }
  });

  return safeReports;
}

export function numberOfSafeReportsWithTolerance(input: string) {
  return 0;
}

console.log("Safe reports:", numberOfSafeReports(input));
