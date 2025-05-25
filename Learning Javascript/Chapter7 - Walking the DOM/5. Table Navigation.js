// Table navigation in JavaScript means accessing and traversing the structure of an HTML table using DOM properties. Tables have a specific structure, and the DOM provides convenient properties for navigating them.

// <!-- Example HTML -->
// <table id="myTable">
//   <thead>
//     <tr>
//       <th>Name</th>
//       <th>Age</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>Alice</td>
//       <td>24</td>
//     </tr>
//     <tr>
//       <td>Bob</td>
//       <td>30</td>
//     </tr>
//   </tbody>
// </table>

const table = document.getElementById('myTable');

// 1. Access the table sections
const thead = table.tHead;    // <thead> element
const tbody = table.tBodies[0]; // <tbody> element

// 2. Access rows
const headRow = thead.rows[0]; // First row in thead
const bodyRows = tbody.rows;   // HTMLCollection of <tr> in tbody

// 3. Access cells in a row
const firstCell = bodyRows[0].cells[0]; // "Alice"
const secondCell = bodyRows[0].cells[1]; // "24"

// 4. Loop through all rows and cells
for (let row of tbody.rows) {
  for (let cell of row.cells) {
    console.log(cell.textContent); // Logs "Alice", "24", "Bob", "30"
  }
}

// 5. Access parent elements
const parentRow = firstCell.parentElement; // <tr> containing "Alice" and "24"
const parentTable = table.parentElement;   // Parent of the table (could be <body> or a <div>)

