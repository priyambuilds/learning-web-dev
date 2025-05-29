// Step 1: Select DOM elements
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const taskCount = document.getElementById('task-count');
const tabs = document.querySelectorAll('.tab-btn');
// Step 2: Create a place to store all tasks
let tasks = []; // This will be an array of task objects
let currentTab = 'all'; // Default tab
let taskIdCounter = 0; // Unique ID generator