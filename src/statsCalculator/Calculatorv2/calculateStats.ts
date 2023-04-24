export function calculateStats(numArray: any[]) {
  return {
    minValue: numArray.reduce(
      (previousNum, currentNum) =>
        previousNum < currentNum ? previousNum : currentNum,
      numArray,
    ),
    maxValue: numArray.reduce(
      (previousNum, currentNum) =>
        previousNum > currentNum ? previousNum : currentNum,
      numArray,
    ),
    numElements: numArray.length,
    averageValue: Number(
      (
        numArray.reduce((prev, current) => prev + current) / numArray.length
      ).toFixed(12),
    ),
  };
}
