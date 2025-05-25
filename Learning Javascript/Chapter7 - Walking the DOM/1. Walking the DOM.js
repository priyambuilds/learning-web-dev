// Walking the DOM in JavaScript means navigating through the structure of the HTML document (the DOM tree) using JavaScript. You can move between parent, child, and sibling nodes to access or modify elements.

// Suppose you have this HTML:
// <div id="container">
//   <p>First paragraph</p>
//   <p>Second paragraph</p>
// </div>

const container = document.getElementById('container');

// Access the first child element (first <p>)
const firstParagraph = container.firstElementChild; // <p>First paragraph</p>

// Access the next sibling element (second <p>)
const secondParagraph = firstParagraph.nextElementSibling; // <p>Second paragraph</p>

// Access the parent element (the <div>)
const parentDiv = firstParagraph.parentElement; // <div id="container">...</div>

// Access all child nodes (includes text, comments, etc.)
const allChildNodes = container.childNodes; // NodeList

// Access only child elements (ignores text/comments)
const allChildren = container.children; // HTMLCollection

// Loop through all child elements
for (let child of container.children) {
  console.log(child.textContent);
}

// Access previous sibling (null in this case, as firstParagraph is the first child)
const prevSibling = firstParagraph.previousElementSibling; // null

// Access the last child element
const lastChild = container.lastElementChild; // <p>Second paragraph</p>
// You can also use other methods like `querySelector`, `querySelectorAll`, etc., to navigate the DOM.

// Example using querySelector
const specificParagraph = container.querySelector('p:nth-child(2)'); // <p>Second paragraph</p>

//Key DOM navigation properties:

// parentElement – the parent node (element)
// children – all child elements (HTMLCollection)
// childNodes – all child nodes (NodeList, includes text/comments)
// firstElementChild / lastElementChild – first/last child element
// nextElementSibling / previousElementSibling – next/previous sibling element
// Summary:
// Walking the DOM lets you move up, down, and sideways in the DOM tree to access or manipulate any part of your HTML document using JavaScript.