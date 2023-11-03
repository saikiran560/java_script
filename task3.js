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
number = numbers.map(function(num) {
    console.log(num * 2);
});

let square = function(num){
    return num+num;
}
console.log(square(3))


let person ={name:"sai",age:25};

(function() {
    console.log(person.name +" "+person.age);
})(person);


function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(4));


function* generateNumbers() {

    console.log("this is 1st yield");
    yield 1;
    console.log("this is 2nd yield");
    yield 2;
    
}
const gen =generateNumbers();
console.log(gen.next());
console.log(gen.next());



function man(first, last) {
    this.first = first
    this.last = last

}

// Create instances of Person using the constructor function
const person1 = new man("sai","kiran");
console.log(person1.first+" "+person1.last);


/*Global scope*/

let q = "hello";

function gret() {
    q = 3;
}

// before the function call
console.log(q);

//after the function call
gret();
console.log(q);



/* Local scope */

// program showing block-scoped concept
// global variable
let a = 'Hello';

function greet() {

    // local variable
    let b = 'World';

    console.log(a + ' ' + b);

    if (b == 'World') {

        // block-scoped variable
        let c = 'hello';

        console.log(a + ' ' + b + ' ' + c);
    }

    // variable c cannot be accessed here
    console.log(a + ' ' + b);
}


greet();


