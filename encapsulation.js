function Dog(name, age) {
  // Private variables encapsulated within the closure
  let _name = name;
  let _age = age;

  // Public method to get information about the dog
  this.getInfo = function () {
    return `${_name} is ${_age} years old.`;
  };

  // Public method to celebrate the dog's birthday
  this.haveBirthday = function () {
    _age++;
    console.log(`Happy birthday, ${_name}! Now ${_name} is ${_age} years old.`);
  };
}

// Creating an instance of Dog
const myDog = new Dog('Buddy', 3);

// Using public methods to interact with encapsulated state
console.log(myDog.getInfo()); // Output: Buddy is 3 years old.

myDog.haveBirthday(); // Output: Happy birthday, Buddy! Now Buddy is 4 years old.

console.log(myDog.getInfo()); // Output: Buddy is 4 years old.
