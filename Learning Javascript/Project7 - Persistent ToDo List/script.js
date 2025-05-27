let items = [];

const itemsDiv = document.getElementById("items");
const input = document.getElementById("itemInput");
const storageKey = "items";

// Load items from localStorage and render
function loadItems() {
    const oldItems = localStorage.getItem(storageKey);
    if (oldItems) items = JSON.parse(oldItems);
    renderItems();
}

// Render all items, with edit and delete functionality
function renderItems() {
    itemsDiv.innerHTML = "";
    if (items.length === 0) {
        const emptyMsg = document.createElement("div");
        emptyMsg.textContent = "No items in your list.";
        emptyMsg.className = "empty-msg";
        itemsDiv.appendChild(emptyMsg);
        return;
    }
    items.forEach((item, idx) => {
        const container = document.createElement("div");

        // Editable text
        const text = document.createElement("input");
        text.type = "text";
        text.value = item;
        text.style.display = "inline";
        text.style.marginRight = "10px";
        text.style.flex = "1";
        text.readOnly = true;

        // Edit button
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "edit-btn";
        editBtn.style.marginRight = "5px";
        let editing = false;
        editBtn.onclick = () => {
            if (!editing) {
                text.readOnly = false;
                text.focus();
                editBtn.textContent = "Save";
                editBtn.style.backgroundColor = "#4CAF50";
                editing = true;
            } else {
                const newValue = text.value.trim();
                if (!newValue) {
                    alert("Item cannot be empty.");
                    text.value = items[idx];
                    text.readOnly = true;
                    editBtn.textContent = "Edit";
                    editBtn.style.backgroundColor = "#2196F3";
                    editing = false;
                    return;
                }
                items[idx] = newValue;
                saveItems();
                renderItems();
            }
        };

        // Delete button
        const button = document.createElement("button");
        button.textContent = "Delete";
        button.onclick = () => removeItem(idx);

        container.appendChild(text);
        container.appendChild(editBtn);
        container.appendChild(button);
        itemsDiv.appendChild(container);

        // Save on Enter key when editing
        text.addEventListener("keydown", (e) => {
            if (editing && e.key === "Enter") {
                editBtn.onclick();
            }
        });
    });
}

// Save items to localStorage
function saveItems() {
    const stringItems = JSON.stringify(items);
    localStorage.setItem(storageKey, stringItems);
}

// Add a new item
function addItem() {
    const value = input.value.trim();
    if (!value) {
        alert("You cannot add an empty item");
        return;
    }
    items.push(value);
    saveItems();
    renderItems();
    input.value = "";
}

// Remove an item by index
function removeItem(idx) {
    items.splice(idx, 1);
    saveItems();
    renderItems();
}

// Clear all items
function clearAll() {
    if (items.length === 0) return;
    if (confirm("Are you sure you want to clear all items?")) {
        items = [];
        saveItems();
        renderItems();
    }
}

// Add item on Enter key in input
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addItem();
    }
});

document.addEventListener("DOMContentLoaded", loadItems);

// Expose clearAll for button
window.clearAll = clearAll;