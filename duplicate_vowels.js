function printUniqueVowels(input) {
    input = input.toLowerCase(); // Convert input to lowercase for case-insensitive matching
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = '';
    let printedVowels = [];

    for (let i = 0; i < input.length; i++) {
        const char = input.charAt(i);
        if (vowels.includes(char) && !printedVowels.includes(char)) {
            result += char + ' ';
            printedVowels.push(char);
        }
    }

    return result;
}

const userInput = prompt("Enter a sentence or word:");
const uniqueVowelResult = printUniqueVowels(userInput);

console.log("Unique Vowels in the input: " + uniqueVowelResult);
