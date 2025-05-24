// Write a javascript program to generate a random number and store it in a variable. The program then takes an input from the user to tell them whether the guess was correct, greater or lesser than the original number. 100 - (no of guesses) is the score of the user. The program is expected to terminate once the number is guessed. Number should be between 1-100.

const number = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100. Math.floor() is used to round down to the nearest integer. Math.random() generates a random number between 0 and 1. Multiplying by 100 gives a number between 0 and 100. Adding 1 gives a number between 1 and 100.
number = Number.parseInt(number); // Convert the number to an integer.
let guesses = 0; // Initialize the number of guesses to 0.
while (true) {
  let input = prompt("Guess a number between 1 and 100:"); // Prompt the user to guess a number.
  // If the user cancels or types 'q' or 'quit', exit the game.
  if (input === null || input.toLowerCase() === 'q' || input.toLowerCase() === 'quit') {
    alert("Game exited. The number was " + number + ".");
    break;
  }
  input = Number.parseInt(input); // Convert the input to an integer.
    // If the input is not a valid number between 1 and 100, prompt again.
  if (isNaN(input) || input < 1 || input > 100) {
    alert("Please enter a valid number between 1 and 100.");
    continue;
  }
  guesses++; // Increment the number of guesses.
  if (input == number) {
    let score = 100 - guesses + 1;
    alert(`Congratulations! You guessed the number in ${guesses} guesses.\nYour score is: ${score}`);
    break;
  } else if (input < number) {
    alert("Too low! Try again.");
  } else {
    alert("Too high! Try again.");
  }
}
// The game continues until the user guesses the correct number. The number of guesses is displayed when the user guesses the correct number. The game is played in the browser console.