let numbers = ["sai","kiran","mohan",];

// function to check even numbers
function checkEven(word) {
  if (word.length > 4)
    return true;
  else
    return false;
}

// create a new array by filter even numbers from the numbers array
let evenNumbers = numbers.filter(checkEven);
console.log(evenNumbers);

