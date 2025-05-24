// Q1 Write a program to find the mean of 5 numbers
a = prompt("Enter the first number")
b = prompt("Enter the second number")
c = prompt("Enter the third number")
d = prompt("Enter the fourth number")
e = prompt("Enter the fifth number")
a = Number.parseInt(a)
b = Number.parseInt(b)
c = Number.parseInt(c)
d = Number.parseInt(d)
e = Number.parseInt(e)
const mean = (a, b, c, d, e) => (a + b + c + d + e) / 5
console.log("The mean of " + a + ", " + b + ", " + c + ", " + d + ", " + e + " is " + mean(a, b, c, d, e))