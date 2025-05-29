# Calculator JavaScript Logic Explained

This calculator uses JavaScript to handle all user interactions and calculations. Below is a detailed explanation of how the logic works, what problems it solves, and how each part contributes to the calculator's functionality.

---

## 1. **Element Selection**

```javascript
const container = document.querySelector('.container');
const keys = container.querySelector('.btns');
const display = container.querySelector('.display h1');
```
- **container**: The main calculator wrapper.
- **keys**: The div containing all the calculator buttons.
- **display**: The `<h1>` element where the current number or result is shown.

---

## 2. **Calculation Function**

```javascript
const calculate = (n1, operator, n2) => {
  const num1 = parseFloat(n1);
  const num2 = parseFloat(n2);
  if (operator === 'add') return num1 + num2;
  if (operator === 'subtract') return num1 - num2;
  if (operator === 'multiply') return num1 * num2;
  if (operator === 'divide') return num2 !== 0 ? num1 / num2 : 'Error';
  return n2;
};
```
- **Purpose**: Takes two numbers and an operator, performs the calculation, and returns the result.
- **Problem Solved**: Centralizes all arithmetic logic, making the main event handler cleaner and easier to maintain.
- **Division by zero**: Returns `'Error'` if the user tries to divide by zero.

---

## 3. **Event Listener for Button Clicks**

```javascript
keys.addEventListener('click', (e) => {
  if (!e.target.matches('button')) return;
  // ...rest of the logic
});
```
- **Purpose**: Listens for clicks on any calculator button.
- **Problem Solved**: Handles all button interactions in one place, using event delegation for efficiency.

---

## 4. **Button Press Logic**

### a. **Variable Setup**

```javascript
const key = e.target;
const action = key.dataset.action;
const keyContent = key.textContent;
const displayedNum = display.textContent;
const prevKeyType = container.dataset.previousKeyType;
```
- **key**: The button that was clicked.
- **action**: The type of button (from `data-action`), e.g., 'add', 'subtract', 'decimal', etc.
- **keyContent**: The visible text on the button.
- **displayedNum**: The current value shown on the display.
- **prevKeyType**: The type of the previously pressed key (stored in a custom data attribute).

---

### b. **Number Button Logic**

```javascript
if (!action) {
  if (displayedNum === '0' || prevKeyType === 'operator' || prevKeyType === 'calculate') {
    display.textContent = keyContent;
  } else {
    display.textContent += keyContent;
  }
  container.dataset.previousKeyType = 'number';
}
```
- **Problem Solved**: 
  - Prevents leading zeros.
  - Starts a new number after an operator or calculation.
  - Appends digits for multi-digit numbers.

---

### c. **Decimal Button Logic**

```javascript
if (action === 'decimal') {
  if (prevKeyType === 'operator' || prevKeyType === 'calculate') {
    display.textContent = '0.';
  } else if (!displayedNum.includes('.')) {
    display.textContent += '.';
  }
  container.dataset.previousKeyType = 'decimal';
}
```
- **Problem Solved**: 
  - Ensures only one decimal per number.
  - Starts a new decimal number after an operator or calculation.

---

### d. **Operator Button Logic**

```javascript
if (['add', 'subtract', 'multiply', 'divide'].includes(action)) {
  const firstValue = container.dataset.firstValue;
  const operator = container.dataset.operator;
  const currentValue = displayedNum;

  if (firstValue && operator && prevKeyType !== 'operator' && prevKeyType !== 'calculate') {
    const result = calculate(firstValue, operator, currentValue);
    display.textContent = result;
    container.dataset.firstValue = result;
  } else {
    container.dataset.firstValue = currentValue;
  }

  container.dataset.operator = action;
  container.dataset.previousKeyType = 'operator';
}
```
- **Problem Solved**:
  - Supports chaining operations (e.g., `2 + 3 + 4`).
  - Stores the first value and operator for later use.
  - Handles repeated operator presses gracefully.

---

### e. **Equals (`=`) Button Logic**

```javascript
if (action === 'calculate') {
  let firstValue = container.dataset.firstValue;
  const operator = container.dataset.operator;
  let secondValue = displayedNum;

  if (!firstValue || !operator) return;

  if (prevKeyType === 'calculate') {
    firstValue = displayedNum;
    secondValue = container.dataset.modValue;
  }

  const result = calculate(firstValue, operator, secondValue);
  display.textContent = result;

  container.dataset.firstValue = null;
  container.dataset.modValue = secondValue;
  container.dataset.previousKeyType = 'calculate';
}
```
- **Problem Solved**:
  - Performs the calculation using stored values.
  - Supports repeated equals presses (e.g., `2 + 3 = = =`).
  - Stores the last used value for repeated calculations.

---

### f. **Clear Button Logic**

```javascript
if (action === 'clear') {
  display.textContent = '0';
  container.dataset.firstValue = '';
  container.dataset.modValue = '';
  container.dataset.operator = '';
  container.dataset.previousKeyType = '';
}
```
- **Problem Solved**: Resets the calculator to its initial state.

---

### g. **Backspace Button Logic**

```javascript
if (action === 'backspace') {
  if (displayedNum.length === 1 || displayedNum === 'Error') {
    display.textContent = '0';
  } else {
    display.textContent = displayedNum.slice(0, -1);
  }
  container.dataset.previousKeyType = 'backspace';
}
```
- **Problem Solved**: Allows the user to delete the last digit or reset after an error.

---

## 5. **State Management with `data-*` Attributes**

- The calculator uses custom `data-*` attributes on the `.container` element to store:
  - `firstValue`: The first operand in an operation.
  - `operator`: The current operator.
  - `modValue`: The second operand for repeated calculations.
  - `previousKeyType`: The type of the last key pressed.

**Problem Solved**:  
This approach keeps the calculator's state tied to the DOM, making it easy to manage and debug, and avoids using global variables.

---

## 6. **Problems Tackled by This Logic**

- **Input Handling**: Ensures only valid numbers and decimals are entered.
- **Chained Calculations**: Allows users to perform operations like `2 + 3 + 4` without pressing `=`.
- **Repeated Equals**: Supports pressing `=` multiple times to repeat the last operation.
- **Error Handling**: Handles division by zero gracefully.
- **State Management**: Keeps track of what the user is doing (entering a number, operator, etc.).
- **User Experience**: Mimics the behavior of a real calculator, making it intuitive for users.

---

## 7. **Summary**

This calculator's JavaScript logic is designed to handle all the typical behaviors expected from a basic calculator, including chaining operations, handling decimals, clearing, backspacing, and repeated calculations. It uses event delegation, a central calculation function, and DOM-based state management to keep the code organized and