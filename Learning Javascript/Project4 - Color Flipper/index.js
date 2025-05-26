const body = document.getElementsByTagName("body")[0]; // Select the body element
body.style.backgroundColor = "red"; // Set the initial background color to white
// We can also functionize this code
function setColor(name) {
    body.style.backgroundColor = name;
}
setColor('red');
setColor('green');
setColor('blue');
// Random Color Generator
function randomColor() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    const color = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = color;
}
randomColor();