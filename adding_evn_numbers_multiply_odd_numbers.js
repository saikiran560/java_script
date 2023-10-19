let sum = 0;
let product = 1;


for(let i=1;i<=100;i++){
    if (i % 2 === 0) {
    sum += i;
}
else{
    product *= i;
}
}

console.log("sum of even numbers:"+ sum);
console.log("product of odd numbers:"+ product);