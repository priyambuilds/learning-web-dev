shouldResetInput = false is a flag that helps you control when to start a new number in the calculator display.

Why is it useful?
When a user presses an operator (+, -, ×, ÷) or =, the next number they type should replace the display, not append to the previous number.
This flag tells your code:
If shouldResetInput is true, the next number button press should clear the display and start a new number.
If shouldResetInput is false, the next number button press should append to the current input.
Example:
User enters 12
User presses +
Set shouldResetInput = true
User presses 3
Since shouldResetInput is true, display shows just 3 (not 123)
Set shouldResetInput = false after this
In summary:
This flag helps you manage when to clear the display for new input, making the calculator behave like a real one!