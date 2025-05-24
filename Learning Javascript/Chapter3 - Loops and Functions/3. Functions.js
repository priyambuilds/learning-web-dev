let a = 10;
let b = 20;
let c = 30;
// Creating a function to calculate the average of three numbers
function average(a, b, c) {
    let avg = (a + b + c) / 3;
    return avg;
}
console.log("Average of " + a + ", " + b + ", " + c + " is " + average(a, b, c));
// Creating a function to calculate 1+ Average
function onePlusAverage(a, b, c) {
    return 1 + average(a, b, c);
}
confirm("The average of " + a + ", " + b + ", " + c + " + 1 is " + onePlusAverage(a, b, c));

// Arrow function
const sum = (a, b) => a + b; // arrow function to calculate the sum of two numbers
console.log("Sum of " + a + " and " + b + " is " + sum(a, b));