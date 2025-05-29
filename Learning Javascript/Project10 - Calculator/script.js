// Select the main container, button section, and display output elements
const container = document.querySelector('.container');
const keys = container.querySelector('.btns');
const display = container.querySelector('.display h1');

// Function to perform arithmetic based on the operator
const calculate = (n1, operator, n2) => {
  const num1 = parseFloat(n1); // Convert first operand from string to float
  const num2 = parseFloat(n2); // Convert second operand from string to float
  if (operator === 'add') return num1 + num2; // Addition
  if (operator === 'subtract') return num1 - num2; // Subtraction
  if (operator === 'multiply') return num1 * num2; // Multiplication
  if (operator === 'divide') return num2 !== 0 ? num1 / num2 : 'Error'; // Division with zero check
  return n2; // Fallback: return second operand if no valid operator
};

// Event listener for all button clicks within the keys container
keys.addEventListener('click', (e) => {
  if (!e.target.matches('button')) return; // Exit if the clicked element is not a button

  const key = e.target; // The button that was clicked
  const action = key.dataset.action; // Action type (e.g., add, subtract, clear, etc.)
  const keyContent = key.textContent; // The text inside the button
  const displayedNum = display.textContent; // Current value shown in display
  const prevKeyType = container.dataset.previousKeyType; // Last button type pressed

  // ========== NUMBER BUTTONS ========== //
  if (!action) {
    // If the display is 0, or the previous key was an operator or equals, start new number
    if (displayedNum === '0' || prevKeyType === 'operator' || prevKeyType === 'calculate') {
      display.textContent = keyContent;
    } else {
      display.textContent += keyContent; // Otherwise append digit to current number
    }
    container.dataset.previousKeyType = 'number'; // Update previous key type
  }

  // ========== DECIMAL BUTTON ========== //
  if (action === 'decimal') {
    // If pressed after operator or calculation, start new number with '0.'
    if (prevKeyType === 'operator' || prevKeyType === 'calculate') {
      display.textContent = '0.';
    } else if (!displayedNum.includes('.')) {
      display.textContent += '.'; // Add decimal only if not already present
    }
    container.dataset.previousKeyType = 'decimal';
  }

  // ========== OPERATOR BUTTONS ========== //
  if (['add', 'subtract', 'multiply', 'divide'].includes(action)) {
    const firstValue = container.dataset.firstValue; // Previously stored first number
    const operator = container.dataset.operator; // Previously stored operator
    const currentValue = displayedNum; // Current value on the display

    // If first value and operator exist, and user didn't press another operator or equals
    if (firstValue && operator && prevKeyType !== 'operator' && prevKeyType !== 'calculate') {
      const result = calculate(firstValue, operator, currentValue); // Calculate intermediate result
      display.textContent = result; // Show result on screen
      container.dataset.firstValue = result; // Store result as new first value
    } else {
      container.dataset.firstValue = currentValue; // Store current display as first value
    }

    container.dataset.operator = action; // Store new operator
    container.dataset.previousKeyType = 'operator'; // Update key type
  }

  // ========== EQUALS BUTTON ========== //
  if (action === 'calculate') {
    let firstValue = container.dataset.firstValue; // Get first operand
    const operator = container.dataset.operator; // Get stored operator
    let secondValue = displayedNum; // Second operand is current display value

    if (!firstValue || !operator) return; // Do nothing if either is missing

    // If equals pressed repeatedly, use stored modValue as second operand
    if (prevKeyType === 'calculate') {
      firstValue = displayedNum;
      secondValue = container.dataset.modValue;
    }

    const result = calculate(firstValue, operator, secondValue); // Perform calculation
    display.textContent = result; // Display the result

    // Prepare for repeat calculations with modValue
    container.dataset.firstValue = null;
    container.dataset.modValue = secondValue;
    container.dataset.previousKeyType = 'calculate';
  }

  // ========== CLEAR BUTTON ========== //
  if (action === 'clear') {
    display.textContent = '0'; // Reset display
    container.dataset.firstValue = ''; // Clear stored first value
    container.dataset.modValue = ''; // Clear stored second value
    container.dataset.operator = ''; // Clear stored operator
    container.dataset.previousKeyType = ''; // Reset previous key type
  }

  // ========== BACKSPACE BUTTON ========== //
  if (action === 'backspace') {
    // If only one digit or an error is displayed, reset to 0
    if (displayedNum.length === 1 || displayedNum === 'Error') {
      display.textContent = '0';
    } else {
      display.textContent = displayedNum.slice(0, -1); // Remove last character
    }
    container.dataset.previousKeyType = 'backspace';
  }
});