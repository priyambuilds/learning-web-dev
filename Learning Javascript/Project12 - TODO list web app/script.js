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

addBtn.addEventListener('click', ()=>{
    // Get input value and remove leading/trailing spaces
    const Text = input.value.trim();
    // Step 1: Ignore if the input is empty
    if (Text === '') return;
    // Step 2: Create a task object
    // We’ll store each task as an object with the following structure:
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
function renderTasks() {
    // Step 1: Clear the current task list
    todoList.innerHTML = '';
    // Step 2: Filter tasks based on current tab
    let filteredTasks = tasks;
    if (currentTab === 'active') {
        filteredTasks = tasks.filter(task => !task.completed);
    } else if (currentTab === 'completed') {
        filteredTasks = tasks.filter(task => task.completed)
    }
    // Step 3: Loop through each task and create a list item
    filteredTasks.forEach(task => {
        const li = document.createElement('li'); // Create <li> element
        li.innerHTML = `
            <input type="checkbox" class="toggle" data-id="${task.id}" ${task.completed ? 'checked' : ''}>
            <span class="task-text ${task.completed ? 'completed' : ''}" >${task.text}</span>
            <button class="edit-btn" data-id="${task.id}">Edit</button>
            <button calss="delete-btn" data-id="${task.id}">Delete</button>
        `;
         todoList.appendChild(li); // Add to the <ul>
    });
    // Step 4: Update the task count
    updateTaskCount();
}
// Step 4: Handle checkbox toggling
todoList.addEventListener('change', function(e) {
    // Check if the clicked element has the 'toggle' class (the checkbox)
    if (e.target.classList.contains('toggle')) {
        // Get the task ID from the data-id attribute
        const id = parseInt(e.target.getAttribute('data-id'));
        // Find the task object in the tasks array
        const task = tasks.find(task => task.id === id);
        // If task is found, toggle its 'completed' status
        if (task) {
            task.completed = e.target.checked; // true if checkbox is checked
            renderTasks(); // Refresh the display
        }
    }
    if (e.target.classList.contains('edit-btn')) {
        const id = parseInt(e.target.getAttribute('data-id'));
        const task = tasks.find(task => task.id === id);
        if (!task) return;

        // Create an input box pre-filled with task text
        const li = e.target.parentElement;
        const inputBox = document.createElement('input');
        inputVox.type = 'text';
        inputBox.value = task.text;
        inputBox.classList.add('edit-input');
        // Replace the task text span with the input
        const textSpan = li.querySelector('.task-text');
        li.replaceChild(inputBox, textSpan)
        // Change Edit button to Save
        e.target.textContent = 'Save';
        e.target.classList.remove('edit-btn');
        e.target.classList.add('save-btn');
    }
    // If Save button was clicked
    else if (e.targey.classList.contains('save-btn')) {
        const task = tasks.find(task => task.id === id);
        if (!task) return;
        // Get the new text from the input box
        const li = e.target.parentElement;
        const inputBox = li.querySelector('.edit-input');
        const newText = inputBox.value.trim();
        // Update the task text if it's not empty
        if (newText) {
            task.text = newText;
        }
        // Switch back to render mode
        renderTasks();
    }
    else if (e.target.classList.contains('delete-btn')) {
        const id = parseInt(e.target.getAttribute('data-id'));
        // Delete the task
        tasks = tasks.filter(task => task.id !== id);
        // Re-render the list and update counts
        renderTasks();
    }

});