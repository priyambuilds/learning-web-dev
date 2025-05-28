const container = document.querySelector('.container')
const keys = container.querySelector('.btns')
const display = container.querySelector('.display')
keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
    
    // If the calculator shows 0, we want to replace the calculator’s display with the clicked key. We can do so by replacing the display’s textContent property.
    if (!action) {
        if (displayedNum === '0') {
            display.textContent = keyContent
        } else {
            display.textContent = displayedNum + keyContent // If the calculator shows a non-zero number, we want to append the clicked key to the displayed number. To append a number, we concatenate a string.
        }
        if (action === 'decimal') {
            display.textContent = displayedNum + '.'
        }
    }  
    //If a person hits an operator key, the operator should be highlighted so Mary knows the operator is active.
    if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
    ) {
        key.classList.add('is-depressed')
    }
    // To release the pressed state, we remove the is-depressed class from all keys through a forEach loop:
    
    if (!action) {
        console.log('number key!')
    }
    // If the key has a data-action that is either add, subtract, multiply or divide, we know the key is an operator.
    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      console.log('operator key!')
    }

    // following the same logic
    if (action === 'decimal') {
      console.log('decimal key!')
    }

    if (action === 'clear') {
      console.log('clear key!')
    }

    if (action === 'calculate') {
      console.log('equal key!')
    }
    if (action === 'backspace') {
      console.log('backspace key!')
    }
    // At this point, you should get a console.log response from every calculator key.

}
})
// Next, we can use the data-action attribute to determine the type of key that is clicked.

// If the key does not have a data-action attribute, it must be a number key.


