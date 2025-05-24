let name = "Harry"
console.log(name.length) // prints 5
console.log(name.toUpperCase()) // prints HARRY
console.log(name.toLowerCase()) // prints harry
console.log(name[0]) // prints H
console.log(name[1]) // prints a
console.log(name.slice(2, 4)) // prints rr
console.log(name.slice(2)) // prints rry
console.log(name.replace("Har", "Per")) // prints Perry

// Template literals
let boy1 = "Pramod"
let boy2 = "Nikhil"
// Nikhil is a friend of Pramod
let sentence = `${boy2} is a friend of ${boy1}`
console.log(sentence) // prints Nikhil is a friend of Pramod
// Escape sequence characters
let fruit = 'Bana\'na' // prints Bana'na
console.log(fruit)
let fruit2 = "Bana\"na" // prints Bana"na
console.log(fruit2)
let fruit3 = 'Bana\nna' // prints Bana
console.log(fruit3) //            na
let fruit4 = 'Bana\tna' // prints Bana    na
console.log(fruit4)
