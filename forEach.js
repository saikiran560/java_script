let numbers = [1, 3, 4, 9, 8];

// function to compute square of each number
function computeSquare(number) {
  console.log(number * number);
}

// compute square root of each element
numbers.forEach(computeSquare);