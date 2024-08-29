const rock = "rock";
const paper = "paper";
const scissors = "scissors";

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
let humanChoice = "";
let computerChoice = "";

function getHumanChoice() {
    let a = prompt("Rock, Paper, Scissors?", );
    return a.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === rock && computerChoice === scissors) {
        humanScore++;
        return "You win! Rock beats Scissors!";
    } else if (humanChoice == rock && computerChoice == rock) {
        return "Draw!";
    } else if (humanChoice === rock && computerChoice === paper) {
        computerScore++;
        return "You lose! Paper beats Rock";
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        return ("You win!" + humanChoice + " beats " + computerChoice);
    } else if (humanChoice == "scissors" && computerChoice == "scissors") {
        return "Draw!";
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        return ("You lose!" + computerChoice + " beats " + humanChoice);
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        return ("You win!" + humanChoice + " beats " + computerChoice);
    } else if (humanChoice == "paper" && computerChoice == "paper") {
        return "Draw!";
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        return ("You lose!" + computerChoice + " beats " + humanChoice);
    } else {
        return "WTF was that?";
    }
}

function playGame() {
    for (let i = 0; i <= 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
    }
    
}
playGame();

function scoreKeeper() {
    if (humanScore > computerScore) {
        return "You Win!";
    } else {
       return "You Lose";
    }
}
console.log(scoreKeeper());