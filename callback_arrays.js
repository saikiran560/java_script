const numbers = [1,2,3,4];

function processArray(arr, callback) {
  for (const item of arr) {
    callback(item);
  }
}

function doubleNumber(num) {
  console.log(num*2);
}

processArray(numbers, doubleNumber);
