function printVowels(input) {
    input = input.toLowerCase(); // Convert input to lowercase for case-insensitive matching
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = '';

    for (let i = 0; i < input.length; i++) {
        const char = input.charAt(i);
        if (vowels.includes(char)) {
            result += char + ' ';
        }
    }

    return result;
}

const input = prompt("Enter a sentence :");
const vowelResult = printVowels(input);

console.log("Vowels in the input: " + vowelResult);