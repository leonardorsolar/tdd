export default class StatsCalculator {
  // tenta usar : minimumValue(numbers: number[])
  minimumValue(numbers) {
    let minValue = '';
    for (const num of numbers) {
      if (num < minValue) {
        minValue = num;
      }
    }
    return minValue;
  }
  maximumValue(numbers) {
    let maxValue = '';
    for (const num of numbers) {
      if (num > maxValue) {
        maxValue = num;
      }
    }
    return maxValue;
  }
  maximumValuev2(numbers) {
    //com um laço FOR
    //usando o método reduce()
    //usando Math.max()
    //O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
    //O método reduce()executa uma função reducer (provida por você) para cada membro do array, resultando num único valor de retorno.
    // Somar todos os itens da lista
    //[0, 1, 2, 3, 4].reduce( (accum, curr) => accum + curr )
    const maxValue = numbers
      .map(value => value)
      .reduce((previousLargestNumber, currentLargestNumber) =>
        currentLargestNumber > previousLargestNumber
          ? currentLargestNumber
          : previousLargestNumber,
      );
    console.log(maxValue);
    return maxValue;
  }
  numElements(numbers) {
    return numbers.length;
  }
}
