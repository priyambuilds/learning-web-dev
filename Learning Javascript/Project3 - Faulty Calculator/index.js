/* 
Create a faulty calculator using JavaScript
This faulty calculator does the following:
1. It takes two numbers as input from the user
2. It takes input from the user on what operation they want to perform
3. It performs wrong operations as follows:
+ ---> -
* ---> +
- ---> /
/ ---> **
It performs wrong operations 10% of the times
*/

// Get user input
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let op = prompt("Enter the operation (+, -, *, /):");

// Validate operation
if (!['+', '-', '*', '/'].includes(op)) {
    console.log("Invalid operation!");
} 
else if (isNaN(a) || isNaN(b)) {
    console.log("Invalid number input!");
} 
else {
    // Determine if it should be faulty (10% chance)
    const isFaulty = Math.random() < 0.10;
    let result;
}

if (isFaulty) {
    // Perform faulty operation
    switch (op) {
        case '+':
            result = num1 - num2;
            break;
        case '-':
            result = num1 / num2;
            break;
        case '*':
            result = num1 + num2;
            break;
        case '/':
            result = num1 ** num2;
            break;
    }
    console.log(`Result of ${num1} ${op} ${num2} : ${result}`);
} 
else {
    // Perform correct operation
    switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }
    console.log(`Result of ${num1} ${op} ${num2} : ${result}`);
}