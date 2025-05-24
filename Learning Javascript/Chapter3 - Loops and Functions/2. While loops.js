// 4. While loop - loops through a block of code while a specified condition is true
// 5. Do while loop - loops through a block of code once, and then repeats the loop while a specified condition is true.

// While loop
n = prompt("Enter the value of n")
n = Number.parseInt(n)
let i = 0;
while(i<=n){
    console.log(i)
    i++;
}

// do while loop
n = prompt("Enter the value of n")
n = Number.parseInt(n)

let a = 0;
do{
    console.log(a)
    a++;
}while(a<=n) // this will run at least once even if the condition is false