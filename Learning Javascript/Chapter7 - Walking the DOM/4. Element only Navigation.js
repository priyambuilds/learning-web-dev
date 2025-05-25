// Element-only navigation in JavaScript means moving through the DOM tree while ignoring non-element nodes (like text and comments). This is done using properties that only consider element nodes:
// children
// firstElementChild
// lastElementChild
// nextElementSibling
// previousElementSibling
// parentElement

// <!-- Example HTML -->
// <ul id="fruits">
//   <li>Apple</li>
//   <li>Banana</li>
//   <!-- A comment node -->
//   <li>Cherry</li>
// </ul>

const ul = document.getElementById('fruits');

// 1. Access only element children (ignores comments/text)
const items = ul.children; // HTMLCollection of <li> elements

// 2. Access the first and last element child
const firstItem = ul.firstElementChild; // <li>Apple</li>
const lastItem = ul.lastElementChild;   // <li>Cherry</li>

// 3. Navigate to next and previous element siblings
const secondItem = firstItem.nextElementSibling; // <li>Banana</li>
const thirdItem = secondItem.nextElementSibling; // <li>Cherry</li>
const prevItem = thirdItem.previousElementSibling; // <li>Banana</li>

// 4. Loop through all element children
for (let item of ul.children) {
  console.log(item.textContent); // Logs Apple, Banana, Cherry
}

// 5. Access the parent element
const parent = firstItem.parentElement; // <ul id="fruits">