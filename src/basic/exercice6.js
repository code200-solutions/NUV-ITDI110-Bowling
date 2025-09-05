function add(numbers) {
  let sum = 0;
  for (let index = 0; index < numbers.length; index++) {
    sum += numbers[index];
  }
  return sum;
}

let array = [1, 2, 3, 4];
console.log(`Summing ${array.join(',')} = ${add(array)}`);

array = [5, 6, 7, 8];
console.log('Now summing ', array, ' = ', add(array));
