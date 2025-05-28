const container = document.querySelector('.container');
const keys = container.querySelector('.btns');
const display = container.querySelector('.display h1');

// If the previousKeyType is an operator, we want to replace the displayed number with clicked number.
keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    // key is a variable that refers to the button element that was clicked by the user.
    const key = e.target; // e.target is the actual HTML element that triggered the event.
    
    // action is set to key.dataset.action, which gets the value of the data-action attribute from the button.
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    const previousKeyType = container.dataset.previousKeyType;

    // Number key logic
    if (!action) {
      if (displayedNum === '0' || previousKeyType === 'operator') {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent; // Concatenate number
      }
      calculator.dataset.previousKey = 'number'
    }

    // Decimal key
    if (action === 'decimal') {
      // Do nothing if string has a dot already.
      if (!displayedNum.includes('.')) {
        display.textContent = displayedNum + '.';
      }
      container.dataset.previousKeyType = 'decimal';
    } else if (previousKeyType === 'operator') {
      display.textContent = '0.';
    }

    // Operator keys
    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      container.dataset.previousKeyType = 'operator';
      container.dataset.firstValue = displayedNum;
      container.dataset.operator = action;

      const firstValue = calculator.dataset.firstValue
      const operator = calculator.dataset.operator
      const secondValue = displayedNum
      // Note: It's sufficient to check for firstValue and operator because secondValue always exists
      if (firstValue && operator && previousKeyType != 'operator') {
        display.textContent = calculate(firstValue, operator, secondValue)
      }
    }

    // Clear key
    if (action === 'clear') {
      calculator.dataset.previousKeyType = 'clear'
    }

    // Equals key
    if (action === 'calculate') {
      const firstValue = container.dataset.firstValue
      const operator = container.dataset.operator
      const secondValue = displayedNum
      
      display.textContent = calculate(firstValue, operator, secondValue)
      calculator.dataset.previousKeyType = 'calculate'
    }

    // Backspace key
    if (action === 'backspace') {
      calculator.dataset.previousKeyType = 'backspace'
    }
  }
});

const calculate = (n1, operator, n2) => {
  let result = ''
  if (operator === 'add') {
    result = parseFloat(n1) + parseFloat(n2)
  } else if (operator === 'subtract') {
    result = parseFloat(n1) - parseFloat(n2)
  } else if (operator === 'multiply') {
    result = parseFloat(n1) * parseFloat(n2)
  } else if (operator === 'divide') {
    result = parseFloat(n1) / parseFloat(n2)
  }
  return result
}
