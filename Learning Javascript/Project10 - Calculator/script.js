const container = document.querySelector('.container');
const keys = container.querySelector('.btns');
const display = container.querySelector('.display h1');

const calculate = (n1, operator, n2) => {
  const num1 = parseFloat(n1);
  const num2 = parseFloat(n2);
  if (operator === 'add') return num1 + num2;
  if (operator === 'subtract') return num1 - num2;
  if (operator === 'multiply') return num1 * num2;
  if (operator === 'divide') return num2 !== 0 ? num1 / num2 : 'Error';
  return n2;
};

keys.addEventListener('click', (e) => {
  if (!e.target.matches('button')) return;

  const key = e.target;
  const action = key.dataset.action;
  const keyContent = key.textContent;
  const displayedNum = display.textContent;
  const prevKeyType = container.dataset.previousKeyType;

  // ========== NUMBER ==========
  if (!action) {
    if (displayedNum === '0' || prevKeyType === 'operator' || prevKeyType === 'calculate') {
      display.textContent = keyContent;
    } else {
      display.textContent += keyContent;
    }
    container.dataset.previousKeyType = 'number';
  }

  // ========== DECIMAL ==========
  if (action === 'decimal') {
    if (prevKeyType === 'operator' || prevKeyType === 'calculate') {
      display.textContent = '0.';
    } else if (!displayedNum.includes('.')) {
      display.textContent += '.';
    }
    container.dataset.previousKeyType = 'decimal';
  }

  // ========== OPERATOR ==========
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

  // ========== CALCULATE ==========
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

  // ========== CLEAR ==========
  if (action === 'clear') {
    display.textContent = '0';
    container.dataset.firstValue = '';
    container.dataset.modValue = '';
    container.dataset.operator = '';
    container.dataset.previousKeyType = '';
  }

  // ========== BACKSPACE ==========
  if (action === 'backspace') {
    if (displayedNum.length === 1 || displayedNum === 'Error') {
      display.textContent = '0';
    } else {
      display.textContent = displayedNum.slice(0, -1);
    }
    container.dataset.previousKeyType = 'backspace';
  }
});
