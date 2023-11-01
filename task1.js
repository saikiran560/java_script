let a = 42;                  
var stringVar = "Hello, World!";     
let floatdatatype=2.34;
let doubleValue = 3.14159265359; 
let chartype='A';          


const addition = a + 10;
let subtraction = a - 5;
let multiplication = a * 2;
let division = a / 2;
let modulus = a % 5;


let name = "sai " + "kiran";






let isRaining = true;
let isSunny = false;


if (isRaining) {
    console.log("You might need an umbrella.");
} else {
    console.log("No need for an umbrella.");
}

if (isSunny) {
    console.log("It's a sunny day!");
} else {
    console.log("It's not sunny today.");
}


let isWeekend = true;

if (isSunny && isWeekend) {
    console.log("Perfect weather for an outdoor activity!");
} else if (isSunny || isWeekend) {
    console.log("It's either sunny or the weekend.");
} else {
    console.log("Not a great day for outdoor activities.");
}


let isCloudy = true;

if (!isCloudy) {
    console.log("It's not cloudy today.");
} else {
    console.log("It's a cloudy day.");
}








if (a > 20) {
    console.log("a is greater than 20");
} else if (a < 20) {
    console.log("a is less than 20");
} else {
    console.log("a is equal to 20");
}


if (a >= 20) {
    console.log("a is greater than or eaqual to 20");
} else if (a <= 20) {
    console.log("a is less than or equal to 20");
} else {
    console.log("a is equal to 20");
}

//printing num from  1 to 10
let i = 1;
for(i=1;i<=10;i++){
    console.log(i);
}

let num = 2;
while(num<=10){
    console.log(num);
    num += 2;
}

let text = " "
let j = 0;
do{
    text +=  j;
    j++;
}
while(j<10);
console.log(text);




console.log("Number:",  a);
console.log("data type:", typeof a);
console.log("String name:",  stringVar);
console.log("data type:", typeof stringVar);
console.log("float value:",  floatdatatype);
console.log("data type:", typeof floatdatatype);
console.log("Double Value:", doubleValue);
console.log("Data Type of Double Value:", typeof doubleValue);
console.log("character :",  chartype);
console.log("data type:", typeof chartype);
console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);
console.log("Modulus:", modulus);
console.log("name:", name);
