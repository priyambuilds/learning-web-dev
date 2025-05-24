// Types of loops in javascript
// 1. For loop - loops a block of code a number of times
// 2. For in loop - loops through the properties of an object
// 3. For of loop - loops through the values of an iterable object
// 4. While loop - loops through a block of code while a specified condition is true
// 5. Do while loop - loops through a block of code once, and then repeats the loop while a specified condition is true

// For loop
for(let i =0; i<34; i++){
    console.log(i);
} // prints 0 to 33 (it prints i to n-1)

// print the first n natural numbers
let sum = 0 // we need to initialize sum to 0 because we are adding the numbers to it
let n = prompt("enter the value of n") // prompt is used to take input from the user
n = Number.parseInt(n)
for (let i=0; i<n; i++){
    sum += (i+1)
}
console.log("Sum of first " + n + " natural numbers is " + sum);

// for in loop
let obj ={
    harry: 90,
    shubh: 45,
    shivika: 56,
    ritika: 57,
    shiv: 23
}
for (let a in obj){
    console.log("Marks of " + a + " are " + obj[a]);
}

// for of loop is used to iterate over iterable objects like arrays, strings, etc.
// for of loop with arrays
let arr = [1, 2, 3, 4, 5]
for (let b of arr){
    console.log(b);
} // prints 1 to 5
// for of loop with strings
let str = "Harry"
for (let c of str){
    console.log(c);
} // prints H a r r y

// 