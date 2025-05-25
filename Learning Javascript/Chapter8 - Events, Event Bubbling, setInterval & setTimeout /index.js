let button = document.getElementById("btn")
button.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!"
})
// list of all mouse events:
// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent

// document.addEventListener("click", ()=>{}
// alert("I am clicked")
// console.log(document.location.href)
// document.location = "https://google.com"
// document.body.style.background = "red"
// document.body.style.background = "yellow"

// keyboard events
document.addEventListener("keydown", (e)=>{
    console.log(e, e.key)
})
// list of all keyboard events:
// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent

// set interval

setInterval(() => {
    alert("setinterval") // this will keep popping up the alert after every 3 seconds
}, 3000);
// set timeout
setTimeout(() => {
    alert("settimeout") // this will pop up the alert after 5 seconds
}, 5000);