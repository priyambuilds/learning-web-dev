// a fragement of code that produces a value is called an expression. Any value written literally is an expression. For example, 22 or "hello" are expressions.
77; // expression
"harry bhai"; // expression
// Operators are used to produce a value from one or more values. For example, +, -, *, /, %, etc. are operators.
console.log("Operators in JS");

// Arithmetic Operators
let a = 10;
let b = 4;
console.log("a + b = ", a + b); // addition operator. output- 14
console.log("a - b = ", a - b); // subtraction operator. output- 6
console.log("a / b = ", a / b); // division operator. output- 2.5
console.log("a * b = ", a * b); // multiplication operator. output- 40
console.log("a ** b = ", a ** b); // exponentiation operator. output- 10000
console.log("a % b = ", a % b); // modulus operator. output- 2
console.log("++a = ", ++a); // increment operator
console.log("a = ", a); // output 11
console.log("a++ = ", a++); // increment operator
console.log("a = ", a); // output 12
console.log("--a = ", --a); // decrement operator
console.log("a = ", a); // output 11
console.log("a-- = ", a--); // decrement operator
console.log("a = ", a); // output 10

// Assignment Operators
let assignment = 1;
assignment += 5; // same as assignment = assignment + 5
console.log("a is now = ", assignment); // output 6
assignment -= 5; // same as assignment = assignment - 5
console.log("a is now = ", assignment); // output 1
assignment *= 5; // same as assignment = assignment * 5
console.log("a is now = ", assignment); // output 5
assignment /= 5; // same as assignment = assignment / 5
console.log("a is now = ", assignment); // output 1

// Comparison Operators
let comp1 = 6;
let comp2 = 7;
console.log("comp1 == comp2 is ", comp1 == comp2); // false
console.log("comp1 != comp2 is ", comp1 != comp2); // true
console.log("comp1 === comp2 is ", comp1 === comp2); // false
console.log("comp1 !== comp2 is ", comp1 !== comp2); // true
console.log("comp1 > comp2 is ", comp1 > comp2); // false
console.log("comp1 < comp2 is ", comp1 < comp2); // true
console.log("comp1 >= comp2 is ", comp1 >= comp2); // false
console.log("comp1 <= comp2 is ", comp1 <= comp2); // true

// Logical Operators
let x = 5;
let y = 6;
console.log(x<y && x==5); // true
console.log(x>y || x==5); // true
console.log(!false); // true
console.log(!true); // false