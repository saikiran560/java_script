function alphabetical(input) {
    const sortedString = input.split('').sort().join('');
    return sortedString;
}

const userInput = prompt("Enter a string:");
const sortedResult = alphabetical(userInput);

console.log("String in alphabetical order: " + sortedResult);
