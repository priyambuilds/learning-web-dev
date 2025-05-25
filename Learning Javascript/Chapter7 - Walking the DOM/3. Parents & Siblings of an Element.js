// Suppose you have this HTML:
// <div id="container">
//   <p id="first">First paragraph</p>
//   <p id="second">Second paragraph</p>
//   <p id="third">Third paragraph</p>
// </div>

const secondPara = document.getElementById('second');

// 1. Access the parent element
const parent = secondPara.parentElement; // <div id="container">

// 2. Access previous sibling element
const prevSibling = secondPara.previousElementSibling; // <p id="first">

// 3. Access next sibling element
const nextSibling = secondPara.nextElementSibling; // <p id="third">

// 4. Access previous sibling node (could be text, comment, or element)
const prevNode = secondPara.previousSibling;

// 5. Access next sibling node (could be text, comment, or element)
const nextNode = secondPara.nextSibling;

// 6. Check if there is a previous or next sibling
if (prevSibling) {
  console.log('Previous sibling:', prevSibling.textContent);
}
if (nextSibling) {
  console.log('Next sibling:', nextSibling.textContent);
}

// 7. Access the grandparent element
const grandParent = parent.parentElement;

// 8. Loop through all siblings (excluding the element itself)
let sibling = parent.firstElementChild;
while (sibling) {
  if (sibling !== secondPara) {
    console.log('Sibling:', sibling.textContent);
  }
  sibling = sibling.nextElementSibling;
}

// Summary of properties:
// parentElement – direct parent element
// previousElementSibling / nextElementSibling – previous/next sibling elements
// previousSibling / nextSibling – previous/next sibling nodes (could be text, // comment, or element)
// You can loop through siblings using firstElementChild and nextElementSibling.
// This is how you work with parents and siblings of an element in the DOM using JavaScript.