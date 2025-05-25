// use javascript to create a game of snake water gun. The game should ask you to enter S, W or G. The computer should be able to randomly generate S, W or G and declare win or loss using alert. Use confirm and prompt wherever required. You have 3 chances to win the game.

// Snake Water Gun Game: User vs Computer, 3 chances to win

let userScore = 0;
let computerScore = 0;
const choices = ["S", "W", "G"];
const rules = {
    S: "W", // Snake drinks water
    W: "G", // Water disables gun
    G: "S"  // Gun kills snake
};

for (let i = 1; i <= 3; i++) {
    let user = prompt(`Round ${i}:\nEnter S (Snake), W (Water), or G (Gun):`); // Prompt user for input
    // Handle cancel or empty input
    if (!user) {
        alert("Game cancelled.");
        break;
    }

    // Validate user input
    user = user.trim().toUpperCase(); // Normalize input to uppercase and remove extra spaces
    if (!choices.includes(user)) {
        alert("Invalid input. Please enter only S, W, or G.");
        i--; // Don't count invalid input as a round
        continue;
    }
    // Computer's choice
    let cpu = choices[Math.floor(Math.random() * 3)];
    let roundMessage = `You chose ${user}, Computer chose ${cpu}.\n`;
    // Determine winner
    if (user === cpu) {
        roundMessage += "It's a tie!";
    } else if (rules[user] === cpu) {
        userScore++;
        roundMessage += "You win this round!";
    } else {
        computerScore++;
        roundMessage += "You lose this round!";
    }
    // Display round result and score
    roundMessage += `\n\nScore: You ${userScore} - Computer ${computerScore}`;
    alert(roundMessage);

    if (userScore === 2) {
        alert("🎉 Congratulations! You win the game!");
        break;
    } else if (computerScore === 2) {
        alert("😢 Sorry! You lose the game.");
        break;
    }

    if (i < 3) {
        const next = confirm("Ready for the next round?");
        if (!next) {
            alert("Game exited.");
            break;
        }
    }
}

alert(`Game Over!\nFinal Score:\nYou: ${userScore}\nComputer: ${computerScore}`);
