let a = [1 ,2 ,3 ,4 ,5, null, undefined, true, false, "hello", "world", [1, 2, 3], {name: "Harry", age: 20}, function(){console.log("Hello")}, Symbol("Hello"), BigInt(1234567890123456789012345678901234567890)]
console.log(a)
console.log(a[0])
console.log(a[1])
console.log(a[2])

// Array methods
let num = [1, 2, 3, 34, 4]
let b = num.toString() // b is now a string
console.log(b, typeof b) // prints 1,2,3,34,4 string
let c = num.join("_") // join adds the given string between the elements
console.log(c, typeof c) // prints 1_2_3_34_4 string
let d = num.pop() // pop returns the popped element
console.log(num, d) // prints [1, 2, 3, 34] 4
let e = num.push(56) // push returns the new array length
console.log(num, e) // prints [1, 2, 3, 34, 56]
let f = num.shift() // Removes an element from the start of the array
console.log(f, num) // prints 1 [2, 3, 34, 56]
let g = num.unshift(78) // Adds an element to the start of the array
console.log(g, num) // prints 5 [78, 2, 3, 34, 56]
