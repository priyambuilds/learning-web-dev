// Step 1: Select important HTML elements
const input = document.getElementById('todo-input');     // The input box where user types a task
const addBtn = document.getElementById('add-btn');       // The "Add" button
const todoList = document.getElementById('todo-list');   // The list <ul> where tasks will be displayed
const tabs = document.querySelectorAll('.tab-btn');      // All tab buttons (All / Active / Completed)
const taskCount = document.getElementById('task-count'); // Footer area that shows task counts

// Step 2: Set up variables to store tasks and state
let tasks = [];             // An array to store task objects
let currentTab = 'all';     // This tells which tab is currently selected: all, active, or completed
let taskIdCounter = 0;      // This will help assign a unique ID to each task

/*
We’ll store each task as an object with the following structure:
{
  id: 0,                 // unique ID
  text: "Buy groceries", // the task description
  completed: false       // whether it's done or not
}
*/

addBtn.addEventListener('click', ()=>{
    // Get input value and remove leading/trailing spaces
    const Text = input.value.trim();
    // Step 1: Ignore if the input is empty
    if (Text === '') return;
    // Step 2: Create a task object
    const newTask = {
        id: taskIdCounter++,  // Assign a unique ID
        text: text,           // Save the task text
        completed: false      // Initially not completed
    }
    // Step 3: Add the new task to the tasks array
    tasks.push(newTask);
    // Step 4: Clear the input box
    input.value = '';
    // Step 5: Show the updated task list
    renderTasks();
})
// Step 3: Create a function to render tasks