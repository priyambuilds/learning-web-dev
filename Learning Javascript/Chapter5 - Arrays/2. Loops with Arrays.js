let num = [3, 5, 1, 2, 4]
// for loop
// for loop is used to iterate over the elements of an array
for(let i =0; i<num.length; i++){
    console.log(num[i]) // prints 3 5 1 2 4
}
// for each loop
// for each loop is used to iterate over the elements of an array
num.forEach((element) => {
    console.log(element * element) // prints 9 25 1 4 16
})
// Array.from
// Array.from is used to create an array from any other object
let name = "Harry"
let arr = Array.from(name)
console.log(arr) // prints ['H', 'a', 'r', 'r', 'y']
// for...of
// for...of is used to iterate over the elements of an array
for (let i of num){
    console.log(i) // prints 3 5 1 2 4
}
// for...in
// for...in is used to iterate over the keys of an array
for (let i in num){
    console.log(i) // prints 0 1 2 3 4
}