//rock paper scissors array
var rockPaperScissors = ["R", "P", "S"];

//variables for wins, losses, ties
var wins = 0;
var ties = 0;
var losses = 0;


//prompt message for user to input R, P, S
var userChoice;
var keepPlaying = true;

function playGame() {

    while (keepPlaying) {
        var userChoice = window.prompt("Enter R, P, or S:");

        //randomly generated R, P, S value
        var randomChoice = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
        alert("You chose: " + userChoice +"\n" + "The computer chose: " + randomChoice);

        //if scenarios
        if (userChoice == randomChoice) {
            ties == ties++;
            alert("You picked the same thing! Go again!");
        }
    
        else if (userChoice == "R" && randomChoice == "P") {
            losses == losses ++;
            alert("Paper beats rock. You lose!");
        }
        
        else if (userChoice == "R" && randomChoice == "S") {
            wins == wins ++;
            alert("Rock beats scissors. You win!");
        }
        
        else if (userChoice == "P" && randomChoice == "S") {
            losses == losses ++;
            alert("Scissors beats paper. You lose!");
        }
        
        else if (userChoice == "P" && randomChoice == "R") {
            wins == wins ++;
            alert("Paper beats rock. You win!");
        }
        
        else if (userChoice == "S" && randomChoice == "P") {
            wins == wins ++;
            alert("Scissors beats paper. You win!");
        }
        
        else if (userChoice == "S" && randomChoice == "R") {
            losses == losses ++;
            alert("Rock beats scissors. You lose!")
        }
        
        alert("Wins: " + wins +"\n"+
        "Ties: " + ties + "\n" + 
        "Losses: " + losses);

        keepPlaying = confirm("Do you want to keep playing?");
        console.log(keepPlaying);
     }

        return;
    }

playGame();