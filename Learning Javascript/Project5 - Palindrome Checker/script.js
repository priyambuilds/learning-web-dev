const input = document.getElementById("input-text");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

function check() {
    const value = input.value;
    const reverse = value.split("").reverse().join(""); //split the string into an array, reverse the array, and join the array back into a string
    if (value === reverse) {
        alert("P A L I N D R O M E");
    }
    else {
        alert("Not P A L I N D R O M E");
    }
    input.value = "";
}