# ToDo List Web App – Complete Beginner's Guide

## Table of Contents

- [Introduction](#introduction)
- [What Problems Does This App Solve?](#what-problems-does-this-app-solve)
- [How Does a ToDo App Work?](#how-does-a-todo-app-work)
- [Project Structure](#project-structure)
- [HTML Explained](#html-explained)
- [CSS (Styling) Overview](#css-styling-overview)
- [JavaScript Logic – Step by Step](#javascript-logic--step-by-step)
  - [1. Selecting HTML Elements](#1-selecting-html-elements)
  - [2. Storing Tasks and State](#2-storing-tasks-and-state)
  - [3. Adding a Task](#3-adding-a-task)
  - [4. Rendering Tasks](#4-rendering-tasks)
  - [5. Updating Task Counts](#5-updating-task-counts)
  - [6. Handling Task Actions (Complete, Edit, Delete)](#6-handling-task-actions-complete-edit-delete)
  - [7. Tab Switching (All, Active, Completed)](#7-tab-switching-all-active-completed)
- [Theory: Why Structure It This Way?](#theory-why-structure-it-this-way)
- [Possible Improvements](#possible-improvements)
- [Conclusion](#conclusion)

---

## Introduction

This project is a simple **ToDo List Web App** built using HTML, CSS, and JavaScript. It allows users to add, edit, complete, and delete tasks, as well as filter them by status (all, active, completed). This README will explain every part of the app in detail, so even a complete beginner can understand and recreate it.

---

## What Problems Does This App Solve?

- **Task Organization:** Helps users keep track of things they need to do.
- **Productivity:** By listing tasks, users can focus on what’s important and avoid forgetting things.
- **Task Management:** Users can mark tasks as completed, edit them, or delete them as needed.
- **Filtering:** Users can view all tasks, only active (incomplete) tasks, or only completed tasks.

---

## How Does a ToDo App Work?

A ToDo app is a digital checklist. The user can:
- **Add** a new task.
- **Mark** a task as completed (or uncompleted).
- **Edit** the text of a task.
- **Delete** a task.
- **Filter** tasks by their status.

All of this is managed in the browser using JavaScript, which updates the page dynamically as the user interacts with it.

---
# ToDo App - Beginner-Friendly Comprehensive README

## Overview

This is a simple yet powerful **ToDo List App** created using **HTML**, **CSS**, and **JavaScript**. It allows users to add, edit, delete, and categorize tasks based on their completion status.

The app is a practical beginner project for understanding DOM manipulation, JavaScript event handling, and basic state management.

---

## 🌍 What Problem Does It Solve?

Most people have daily tasks or goals. Remembering them can be hard. A ToDo app helps you:

* **Capture tasks** before you forget them.
* **Keep track** of what’s pending and what’s done.
* **Prioritize work** by viewing only active tasks.

It also helps developers learn how real-world applications manage **state**, handle **user input**, and **update the interface dynamically**.

---

## 🎨 User Interface Layout (HTML)

```html
<div class="container">
  <h1>ToDo List</h1>
  <div class="input-section">
    <input type="text" id="todo-input" placeholder="What do you want to do today?">
    <button id="add-btn">Add</button>
  </div>
  <div class="tabs">
    <button class="tab-btn active" data-tab="all">All</button>
    <button class="tab-btn" data-tab="active">Active</button>
    <button class="tab-btn" data-tab="completed">Completed</button>
  </div>
  <ul id="todo-list"></ul>
  <div class="footer">
    <p id="task-count">Total: 0 | Active: 0 | Completed: 0</p>
  </div>
</div>
```

### What Each Section Does

* **Input Section**: User types a task and clicks “Add”.
* **Tabs**: Lets the user filter by All / Active / Completed.
* **Task List**: `<ul>` where each task gets rendered.
* **Footer**: Shows live statistics of task counts.

---

## 💻 Core JavaScript Logic Explained

The entire app is controlled via `script.js`. Let’s walk through its logic step-by-step:

### Step 1: Define DOM Elements

```js
const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const tabs = document.querySelectorAll('.tab-btn');
const taskCount = document.getElementById('task-count');
```

This gets references to elements we need to interact with.

---

### Step 2: Create Variables to Store State

```js
let tasks = [];
let currentTab = 'all';
let taskIdCounter = 0;
```

* `tasks`: Array to store all task objects.
* `currentTab`: Which tab is active.
* `taskIdCounter`: Ensures each task has a unique ID.

Each task object looks like:

```js
{
  id: 0,
  text: 'Buy milk',
  completed: false
}
```

---

### Step 3: Add Task

```js
addBtn.addEventListener('click', () => {
  const text = input.value.trim();
  if (text === '') return;
  const newTask = {
    id: taskIdCounter++,
    text,
    completed: false
  };
  tasks.push(newTask);
  input.value = '';
  renderTasks();
});
```

**Logic Breakdown:**

1. Trim input to remove extra spaces.
2. Ignore empty submissions.
3. Create a new task object.
4. Add it to the array.
5. Clear input.
6. Re-render the task list.

---

### Step 4: Render Tasks Based on Selected Tab

```js
function renderTasks() {
  todoList.innerHTML = '';
  let filteredTasks = tasks;
  if (currentTab === 'active') filteredTasks = tasks.filter(t => !t.completed);
  else if (currentTab === 'completed') filteredTasks = tasks.filter(t => t.completed);

  filteredTasks.forEach(task => {
    const li = document.createElement('li');
    li.classList.add('task-item');
    if (task.completed) li.classList.add('completed');

    li.innerHTML = `
      <label class="task-left">
        <input type="checkbox" class="toggle" data-id="${task.id}" ${task.completed ? 'checked' : ''}>
        <span class="task-text ${task.completed ? 'completed' : ''}">${task.text}</span>
      </label>
      <div class="task-actions">
        <button class="edit-btn" data-id="${task.id}">Edit</button>
        <button class="delete-btn" data-id="${task.id}">Delete</button>
      </div>
    `;
    todoList.appendChild(li);
  });

  updateTaskCount();
}
```

**Key Ideas:**

* Filters the task array based on the current tab.
* Dynamically builds the `<li>` for each task.
* Adds checkboxes, edit/delete buttons.
* Calls `updateTaskCount()`.

---

### Step 5: Toggle Completion, Edit, Delete

```js
todoList.addEventListener('click', function (e) {
  const id = parseInt(e.target.getAttribute('data-id'));
  const task = tasks.find(t => t.id === id);
  if (!task) return;

  if (e.target.classList.contains('toggle')) {
    task.completed = !task.completed;
    renderTasks();
  }
  else if (e.target.classList.contains('edit-btn')) {
    // Replace span with input and change button to 'Save'
    const li = e.target.closest('li');
    const taskLeft = li.querySelector('.task-left');
    taskLeft.innerHTML = '';
    const inputBox = document.createElement('input');
    inputBox.type = 'text';
    inputBox.value = task.text;
    inputBox.classList.add('edit-input');
    taskLeft.appendChild(inputBox);

    e.target.textContent = 'Save';
    e.target.classList.remove('edit-btn');
    e.target.classList.add('save-btn');
  }
  else if (e.target.classList.contains('save-btn')) {
    const li = e.target.closest('li');
    const newText = li.querySelector('.edit-input').value.trim();
    if (newText) task.text = newText;
    renderTasks();
  }
  else if (e.target.classList.contains('delete-btn')) {
    tasks = tasks.filter(t => t.id !== id);
    renderTasks();
  }
});
```

**Key Features:**

* Checkbox toggles completion.
* Edit button turns span into an input field.
* Save button updates the task.
* Delete removes the task from the array.

---

### Step 6: Task Count Display

```js
function updateTaskCount() {
  const total = tasks.length;
  const active = tasks.filter(t => !t.completed).length;
  const completed = tasks.filter(t => t.completed).length;
  taskCount.textContent = `Total: ${total} | Active: ${active} | Completed: ${completed}`;
}
```

---

### Step 7: Tab Filtering

```js
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    currentTab = tab.getAttribute('data-tab');
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderTasks();
  });
});
```

Clicking on a tab:

* Sets which type of tasks to show.
* Re-renders only the matching tasks.

---

## 🔧 Concepts You Learn from This Project

* **DOM manipulation** with `document.createElement`, `appendChild`, and `innerHTML`.
* **Event delegation** using a single `click` handler.
* **Filtering data** dynamically based on state.
* **Editing array objects** and updating UI.
* **Basic UI state management**.
