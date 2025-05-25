let a = prompt("Enter first number")
let b = prompt("Enter second number")
if( isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed")
}
let sum = parseInt(a) + parseInt(b)
// try is used to check the program for errors

function main(){
    try {console.log("The sum is ", sum)
        return true
    }
    // catch is used to handle the errors
    catch{console.log("Error aa gaya bhai")
        return false
    }
    // finally is used to execute the code even after the program is stopped midway
    finally{console.log("Files are being closed and db connection is being closed")}
}
let c = main()