// before ES6 we used var to declare variables.
var age = 30; // number
var isStudent = true; // boolean
var hobbies = ["reading", "gaming", "coding"]; // array
var d = undefined; // undefined
var e = null; // null
console.log(name, age, isStudent, hobbies, d, e);
// now we use let and const to declare variables
let name = "John";
let age = 30;
let isStudent = true;
let hobbies = ["reading", "gaming", "coding"];
let d = undefined;
let e = null;
console.log(name, age, isStudent, hobbies, d, e);

// but why?
//example-
var a = "harry";
{
    var a = "this";
    console.log(a); // output this
}
console.log(a); // output this
// even if when we have declared the variable a inside the block it is accessible outside the block. This is not good.

// let and const are block scoped
let b = "harry";
{
    let b = "this";
    console.log(b); // output this
}
console.log(b); // output harry
// const is used
const c = "harry";
{
    const c = "this";
    console.log(c); // output this
}
console.log(c); // output harry