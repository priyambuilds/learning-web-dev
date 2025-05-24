// Q1 - Create a variable of type string and try to add a number to it
let str = "Hello";
let num = 5;
console.log(str + num); // output Hello5

// Q2 - Use typeof operator to find the datatype of the string in last question
console.log(typeof (str + num)); // output string

// Q3 - Create a const object in javascript. Can you change it to hold a number later?
const obj = {
    key: "value",
    key2: "value2"
};
console.log(obj); // output {key: "value", key2: "value2"}
obj = 45; // This will throw an error because obj is a const object and cannot be reassigned

// Q4 - Try to add a new key to the const object in problem 3. Were you able to do it?
obj.key3 = "value3"; // This will not throw an error because we are not reassinging obj, but adding a new key to the object
console.log(obj); // output {key: 45, key2: "value2", key3: "value3"}

// Q5 - Write a JS program to create a word-meaning dictionary of 5 words.
const dictionary = {
    "aberration": "a departure from what is normal, usual, or expected",
    "cacophony": "a harsh, discordant mixture of sounds",
    "debilitate": "to weaken or impair the strength of",
    "ebullient": "cheerful and full of energy",
    "facetious": "treating serious issues with deliberately inappropriate humor"
};
console.log(dictionary); // output {aberration: "a departure from what is normal, usual, or expected", cacophony: "a harsh, discordant mixture of sounds", debilitate: "to weaken or impair the strength of", ebullient: "cheerful and full of energy", facetious: "treating serious issues with deliberately inappropriate humor"}
console.log(dictionary["cacophony"]); // output a harsh, discordant mixture of sounds
console.log(dictionary["ebullient"]); // output cheerful and full of energy