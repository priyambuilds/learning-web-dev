// Suppose you have this HTML:
// <ul id="myList">
//   <li>Item 1</li>
//   <li>Item 2</li>
//   <li>Item 3</li>
// </ul>

const list = document.getElementById('myList');

// 1. Access all child elements (only element nodes, not text/comments)
const children = list.children; // HTMLCollection of <li> elements

// 2. Access all child nodes (includes text, comments, etc.)
const childNodes = list.childNodes; // NodeList of all child nodes

// 3. Access the first and last child element
const firstChild = list.firstElementChild; // <li>Item 1</li>
const lastChild = list.lastElementChild;   // <li>Item 3</li>

// 4. Loop through children
for (let child of list.children) {
  console.log(child.textContent); // Logs "Item 1", "Item 2", "Item 3"
}