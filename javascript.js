function getComputerChoice() {
    let number = Math.random();
    if (number < .3) {
        return "rock";
    } else if (number > .6) {
        return "paper";
    } else {
        return "scissors";
    }

}

let computerChoice = getComputerChoice();
console.log(computerChoice)

function getHumanChoice() {
    let a = prompt("Rock, Paper, Scissors?", );
    return a.toLowerCase();
}

let humanChoice =  getHumanChoice();
console.log(humanChoice)
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == rock && computerChoice == scissors) {
        humanScore + 1;
        return "You win! Rock beats Scissors!";
    } else if (humanChoice == "rock" && computerChoice == "rock") {
        return "Draw!";
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore + 1;
        return "You lose! Paper beats Rock";
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore + 1;
        return ("You win!" + humanChoice + " beats " + computerChoice);
    } else if (humanChoice == "scissors" && computerChoice == "scissors") {
        return "Draw!";
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore + 1;
        return ("You lose!" + computerChoice + " beats " + humanChoice);
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore + 1;
        return ("You win!" + humanChoice + " beats " + computerChoice);
    } else if (humanChoice == "paper" && computerChoice == "paper") {
        return "Draw!";
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore + 1;
        return ("You lose!" + computerChoice + " beats " + humanChoice);
    } else {
        return "WTF was that?";
    }
}
console.log(playRound())