// Searching the DOM in JavaScript means finding elements in the HTML document using various DOM methods. The most common methods are:
// getElementById
// getElementsByClassName
// getElementsByTagName
// querySelector
// querySelectorAll

// <!-- Example HTML -->
// <div id="container">
//   <p class="text">First paragraph</p>
//   <p class="text highlight">Second paragraph</p>
//   <span>Some span</span>
// </div>

// 1. Get element by ID
const container = document.getElementById('container'); // <div id="container">

// 2. Get elements by class name (returns HTMLCollection)
const texts = document.getElementsByClassName('text'); // [<p>, <p>]

// 3. Get elements by tag name (returns HTMLCollection)
const paragraphs = document.getElementsByTagName('p'); // [<p>, <p>]

// 4. Query selector (returns first match)
const firstHighlight = document.querySelector('.highlight'); // <p class="text highlight">

// 5. Query selector all (returns NodeList of all matches)
const allHighlights = document.querySelectorAll('.highlight'); // [<p class="text highlight">]

// 6. Query inside a specific element
const spanInContainer = container.querySelector('span'); // <span>Some span</span>

// 7. Loop through NodeList or HTMLCollection
for (let p of paragraphs) {
  console.log(p.textContent); // Logs each paragraph's text
}

// Searching the DOM lets you quickly find and work with elements using IDs, classes, tags, or CSS selectors, making it easy to manipulate or read content dynamically.