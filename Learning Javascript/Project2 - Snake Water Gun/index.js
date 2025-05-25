// use javascript to create a game of snake water gun. The game should ask you to enter S, W or G. The computer should be able to randomly generate S, W or G and declare win or loss using alert. Use confirm and prompt wherever required. You have 3 chances to win the game.

// Snake Water Gun Game: User vs Computer, 3 chances to win

let userScore = 0;
let computerScore = 0;

for (let i = 1; i <= 3; i++) {
    let user = prompt("Round " + i + ": Enter S (Snake), W (Water), or G (Gun):");
    if (!user) {
        alert("Game cancelled.");
        break;
    }
    user = user.trim().toUpperCase();
    if (!["S", "W", "G"].includes(user)) {
        alert("Invalid input. Please enter S, W, or G.");
        i--; // Don't count invalid input as a round
        continue;
    }

    let cpu = ["S", "W", "G"][Math.floor(Math.random() * 3)];
    alert("Computer chose: " + cpu);

    if (user === cpu) {
        alert("It's a tie!");
    } else if (
        (user === "S" && cpu === "W") ||
        (user === "W" && cpu === "G") ||
        (user === "G" && cpu === "S")
    ) {
        alert("You win this round!");
        userScore++;
    } else {
        alert("You lose this round!");
        computerScore++;
    }

    alert(`Score: You ${userScore} - Computer ${computerScore}`);

    // Early win/loss check
    if (userScore === 2) {
        alert("Congratulations! You win the game!");
        break;
    } else if (computerScore === 2) {
        alert("Sorry! You lose the game.");
        break;
    }
}

alert("Game over!\nFinal Score:\nYou: " + userScore + "\nComputer: " + computerScore);