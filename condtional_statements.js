// // CONDITIONAL STATEMENTS :-
let num = 5
let result

if(num%2===0){
    result = "even"
}
else{
    false
}

console.log("------------")

let num1 = 6; 

let num2 = 4;

let num3 = 7;

if(num1 > num2 && num1 > num3){
    console.log(num1,"num1 is greater")
}
else if(num2 > num1 && num2 > num3){
   console.log(num2,"num2 is greatest")
}
else{
    console.log(num3,"num3 is greatest")
}

console.log("----------")
// "?" ternary oparator is used when it is only one condition

result = num%2===0 ? "even" : "odd";
console.log("given number is ",result,"using ternary operator")

console.log("----------")
