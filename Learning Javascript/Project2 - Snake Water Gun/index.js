// use javascript to create a game of snake water gun. The game should ask you to enter S, W or G. The computer should be able to randomly generate S, W or G and declare win or loss using alert. Use confirm and prompt wherever required. You have 3 chances to win the game.

let userScore = 0;
let computerScore = 0;
    for (let i=0; i<3; i++) {
        let user = prompt("Enter S, W or G");
        let cpuI = Math.floor(Math.random() * 3);
        let cpu = ["S", "W", "G"][cpuI];
        if(user == cpu){
            alert("Match is a tie");
        }
        else if(user == "S" && cpu == "W"){
            alert("You win");
            userScore++;
        }
        else if(user == "S" && cpu == "G"){
            alert("You lose");
            computerScore++;
        }
        else if(user == "W" && cpu == "S"){
            alert("You lose");
            computerScore++;
        }
        else if(user == "W" && cpu == "G"){
            alert("You win");
            userScore++;
        }
        else if(user == "G" && cpu == "S"){
            alert("You win");
            userScore++;
        }
        else if(user == "G" && cpu == "W"){
            alert("You lose");
            computerScore++;
        }
        else{
            alert("Invalid input");
        }
        alert("Your score is " + userScore + " and computer score is " + computerScore);
        if(userScore == 2){
            alert("You win the game");
            break;
        }
        else if(computerScore == 2){
            alert("You lose the game");
            break;
        }
        else if(i == 2){
            alert("Game over");
            break;
        }
        else{
            alert("Next round");
        }
        console.log(user, cpu)

    }