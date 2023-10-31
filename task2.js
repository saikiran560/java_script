// Create an array of numbers
const numbers = [3, 7, 1, 9, 5, 2, 8, 4, 6];
const fruits = ["Banana", "Orange", "Apple", "Mango"];


for(x in numbers){
    console.log(x+":"+numbers[x])

   }
for(x of numbers){
    console.log(x)

   }

console.log(numbers.splice(0, 2));
console.log(numbers);

console.log(numbers.slice(1, 2));
console.log(numbers);

console.log(fruits.indexOf("Orange",1));


// Function to filter even numbers7
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// Function to calculate the sum of an array
function calculateSum(arr) {
    return arr.reduce((acc, num) => acc + num);
}
// Filter even numbers
const evenNumbers = filterEvenNumbers(numbers);

// Calculate the sum of even numbers
const sumOfEvens = calculateSum(evenNumbers);

console.log("Original Numbers: " + numbers);
console.log("Even Numbers: " + evenNumbers);
console.log("Sum of Even Numbers: " + sumOfEvens);


// Loop to add 6 to each element and push it to the array
for (let i = 0; i < numbers.length; i++) {
    numbers[i] += 6;
}

// Pop an element from the end of the array
console.log(numbers.pop());
console.log(numbers);


// Shift an element from the beginning of the array
console.log(numbers.shift());
console.log(numbers);

// Unshift an element to the beginning of the array
console.log(numbers.unshift(0));
console.log(numbers);

// Use an anonymous function to double each element
number = numbers.map(function(item) {
    console.log(item * 2);
});
