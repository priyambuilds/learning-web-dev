// nn bb ss u - Primitives in JS
// Primitives are immutable
// Primitives are passed by value
// Primitives are created using literals
let a = null;  // object
let b = 345; // number
let c = true; // boolean
let d = BigInt("1234567890123456789012345678901234567890"); // BigInt
let e = "Harry"; // string
let f = Symbol("I am a nice symbol"); // symbol
let g = undefined; // undefined
console.log(a, b, c, d, e, f, g); 
console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f, typeof g);

// Objects in JS - Non primitive data types (key value pairs)
// Objects are mutable
// Objects are reference types
// Objects are created using object literal notation
const item = {
    "Harry": true,
    "Shubh": false,
    "Lovish": 67,
    "Rohan": undefined
}
console.log(item["Harry"]);