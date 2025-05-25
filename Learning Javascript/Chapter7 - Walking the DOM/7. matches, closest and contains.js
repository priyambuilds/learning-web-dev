// <!-- Example HTML -->
// <div id="container">
//   <ul>
//     <li class="item selected">Apple</li>
//     <li class="item">Banana</li>
//     <li class="item">Cherry</li>
//   </ul>
// </div>

const apple = document.querySelector('.item.selected'); // <li class="item selected">Apple</li>
const banana = document.querySelectorAll('.item')[1];   // <li class="item">Banana</li>
const ul = document.querySelector('ul');
const container = document.getElementById('container');

// 1. matches(selector)
// Checks if the element matches a CSS selector
if (apple.matches('.selected')) {
  console.log('Apple is selected'); // true
}
if (!banana.matches('.selected')) {
  console.log('Banana is not selected'); // true
}

// 2. closest(selector)
// Finds the nearest ancestor (or self) that matches the selector
const closestUl = apple.closest('ul'); // <ul>...</ul>
const closestDiv = apple.closest('div'); // <div id="container">...</div>

// 3. contains(node)
// Checks if a node is a descendant of another node
console.log(container.contains(apple)); // true
console.log(ul.contains(banana));       // true
console.log(apple.contains(ul));        // false

//Summary:

// matches is for checking if an element fits a selector.
// closest is for finding the nearest ancestor (or itself) matching a selector.
// contains is for checking if one node is inside another in the DOM tree.