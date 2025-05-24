// Q1 - Create an array of numbers and take input from the user to add numbers to this array
// Q2 - Keep adding numbers to the array in Q1 until 0 is added to the array
do{
    let a = []
    b = prompt("How many numbers you want to add to the array?")
    b = Number.parseInt
    for (let i = 0; i < b; i++) {
        a[i] = prompt("Enter the number")
        a[i] = Number.parseInt(a[i])
        console.log(a[i]) // prints the numbers added to the array
    }
}while(a != 0)

console.log(a) // prints the array

// Q3 - Filter for numbers divisible by 10 from the array resulting from Q2
let c = a.filter((value)=>{
    return value%10 == 0
})
console.log(c) // prints the filtered array

// Q4 - Square each value in the new filtered array
let d = c.map((value)=>{
    return value*value
})
console.log(d) // prints the squared array

// Q5 - Use reduce to calculate factorial of the numnbers from the new array resulting from Q4
let e = d.reduce((h1, h2)=>{
    return h1*h2
})
console.log(e) // prints the factorial of the numbers from the new array