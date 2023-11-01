const numbers = [1, 2, 3, 4, 5, 6];

function sum_reducer(a, b) {
  return a + b;
}

let sum = numbers.reduce(sum_reducer);
console.log(sum);