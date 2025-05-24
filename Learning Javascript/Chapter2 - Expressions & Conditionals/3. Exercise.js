// Q1- Use logical operators to find whether the age of a person lies between 10 and 20?
let a = prompt("Hey what's your age?");
a = Number.parseInt(a);
if(a>10 && a<20){
    console.log("Your age lies between 10 and 20");
}
else{
    console.log("Your age doesnt lies between 10 and 20");
}
// Q2- Demonstrate the use of switch case statements in javascript
let b = prompt("Enter a number between 1 and 5");
b = Number.parseInt(b);
switch(b){
    case 1:
        console.log("You entered 1");
        break;
    case 2:
        console.log("You entered 2");
        break;
    case 3:
        console.log("You entered 3");
        break;
    case 4:
        console.log("You entered 4");
        break;
    case 5:
        console.log("You entered 5");
        break;
    default:
        console.log("Invalid input");
}
// Q3- write a program in javscript to find whether a number is divisible by 2 and 3
let c = prompt("Enter a number to check divisibility by 2 and 3");
c = Number.parseInt(c);
if(c%2==0 && c%3==0){
    console.log("Number is divisible by 2 and 3");
}
else{
    console.log("Number is not divisible by 2 and 3");
}
// using ternary operator (one liner)
console.log(c%2==0 && c%3==0 ? "Number is divisible by 2 and 3" : "Number is not divisible by 2 and 3" ); // using ternary operator

// Q4- write a program in javascript to find whether a number is divisible by either 2 or 3
let d = prompt("Enter a number to check divisibility by 2 or 3");
d = Number.parseInt(d);
if(d%2==0 || d%3==0){
    console.log("Number is divisible by 2 or 3");
}
else{
    console.log("Number is not divisible by 2 or 3");
}
// using ternary operator (one liner)
console.log(d%2==0 || d%3==0 ? "Number is divisible by 2 or 3" : "Number is not divisible by 2 or 3" ); // using ternary operator

// Q5- print "you can drive" or "you cannot drive" based on age being greater than 18 using ternary operator
let e = prompt("Enter your age to check if you can drive");
e = Number.parseInt(e);
console.log(e>18 ? "You can drive" : "You cannot drive"); // using ternary operator
