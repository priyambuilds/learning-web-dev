// =======================
// DOM, BOM & Window Object in JavaScript
// =======================

// 1. DOM (Document Object Model)
// The DOM represents the structure of an HTML document as a tree of objects.
// It allows JavaScript to access and manipulate HTML elements and their content.

console.log("DOM Example:");
document.body.style.backgroundColor = "lightyellow"; // Changes the background color of the page

let heading = document.createElement("h2");
heading.textContent = "This heading was added using the DOM!";
document.body.appendChild(heading);

// 2. BOM (Browser Object Model)
// The BOM represents browser-specific objects (not related to the document itself).
// It allows JavaScript to interact with the browser (e.g., the window, history, navigator, location, etc.).

console.log("BOM Example:");
console.log("Current URL:", window.location.href); // Shows the current page URL
console.log("Browser Name:", window.navigator.userAgent); // Shows browser info

// You can also use BOM to interact with the browser window:
function openNewTab() {
  window.open("https://www.example.com", "_blank"); // Opens a new tab
}
// Uncomment the line below to test opening a new tab
// openNewTab();

// 3. Window Object
// The window object is the global object in the browser environment.
// All global variables, functions, DOM, and BOM objects are properties of the window object.

console.log("Window Object Example:");
console.log(window === this); // true in the global scope

// You can access alert, prompt, setTimeout, etc., via window:
window.alert("This alert is shown using the window object!");

// Summary:
// - DOM: Interacts with the HTML document (elements, content, structure).
// - BOM: Interacts with the browser (window, history, location, navigator).
// - window: The global object that contains everything (DOM, BOM, global JS functions).