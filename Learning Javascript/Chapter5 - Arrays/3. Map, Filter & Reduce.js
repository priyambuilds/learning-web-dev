let arr = [45, 23, 21]
// Array map method
// map creates a new array by performing some operation on each array element
let a = arr.map((value, index, array)=>{
  console.log(value, index, array)
  return value + index
})
console.log(a) // prints [45, 24, 23]

// Array filter method
// filter creates a new array by filtering some elements on the basis of conditions
let arr2 = [45, 23, 21, 0, 3, 5]
let a2 = arr2.filter((a)=>{
    return a<10
})
console.log(a2) // prints [0, 3, 5] 
// Array reduce method
// reduce reduces an array to a single value by adding or any other operation, all the elements one by one 
let arr3 = [1, 2, 3, 5, 2, 1]
let newarr3 = arr3.reduce((h1, h2)=>{
    return h1 + h2
})
console.log(newarr3) // prints 14
