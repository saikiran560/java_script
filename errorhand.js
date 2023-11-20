var num = prompt("Enter a positive integer between 0 to 100");
    
// Storing the time when execution start
var start = Date.now();

try {
    if(num > 0 && num <= 100) {
        alert(Math.pow(num, num)); // the base to the exponent power
    } else {
        throw new Error("An invalid value is entered!");
    }
} catch(e) {
    alert(e.message);
} finally {
    // Displaying the time taken to execute the code
    alert("Execution took: " + (Date.now() - start) + "ms");
}