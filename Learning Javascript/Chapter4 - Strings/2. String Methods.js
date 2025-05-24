let name = "Harry"
console.log(name.length) // prints 5
console.log(name.toUpperCase()) // prints HARRY
console.log(name.toLowerCase()) // prints harry
console.log(name.slice(2, 4)) // prints rr
console.log(name.slice(2)) // prints rry
console.log(name.replace("Har", "Per")) // prints Perry

let boy1 = "Pramod"
let boy2 = "Nikhil"
// concat adds 2 strings
console.log(name.concat(" is a friend of ", boy2, " Ok", "?")) // prints Harry is a friend of Nikhil Ok?
let friend = "      Meena       "
// trim removes the extra spaces from the string
console.log(friend.trim()) // prints Meena
