
/*Named Functions:

These are the most common type of functions in JavaScript and have a name assigned to them.
They can be defined using the function keyword.*/
function add(a, b) {
    return a + b;
}
console.log(add(3,4));

/*Arrow Functions (ES6):

Arrow functions are a concise way to define functions, particularly useful for anonymous functions.
They have a more compact syntax and automatically capture the this value of the enclosing context.
*/
const square = (x) => x * x;
console.log(square(2));

/*Anonymous Functions:

These are functions without a name and are often used as arguments to other functions or in callbacks.
*/

const numbers = [1, 2, 3];
numbers.forEach(function(item) {
    console.log(item);
});

/*Immediately Invoked Function Expressions (IIFE):

These are functions that are defined and executed immediately after their creation.
They are often used to create private scopes and avoid polluting the global namespace.
*/

(function() {
    console.log("this is invoked function");
})();

/*Recursive Functions:

Recursive functions are functions that call themselves, typically to solve problems that can be broken down into smaller, similar sub-problems.
*/
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(4));

/*Higher-Order Functions:

These are functions that take one or more functions as arguments or return functions.
Examples include map, filter, and reduce.
*/
const doubledNumbers = [1, 2, 3].map(x => x * 2);
console.log(doubledNumbers);

/*Generator Functions (ES6):

Generator functions allow you to pause and resume the execution of a function.
They use the function* syntax and yield statements
*/
function* generateNumbers() {
    yield 1;
    yield 2;
    yield 3;
}

/* constructor function*/
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    
   
}

// Create instances of Person using the constructor function
const person1 = new Person("sai", "kiran");
console.log(person1);

