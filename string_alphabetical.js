function sortStringAlphabetically(input) {
    input = input.toLowerCase(); // Convert input to lowercase for case-insensitive sorting
    const characters = input.split(''); // Split the input into an array of characters

    for (let i = 0; i < characters.length; i++) {
        for (let j = i + 1; j < characters.length; j++) {
            if (characters[i] > characters[j]) {
                // Swap characters[i] and characters[j]
                const temp = characters[i];
                characters[i] = characters[j];
                characters[j] = temp;
            }
        }
    }

    const sortedString = characters.join('');
    return sortedString;
}

const userInput = prompt("Enter a string:");
const sortedResult = sortStringAlphabetically(userInput);

console.log("String in alphabetical order: " + sortedResult);
