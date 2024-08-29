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

let computer = getComputerChoice();
console.log(computer);

function getHumanChoice() {
    let a = prompt("Rock, Paper, Scissors?", );
    return a.toLowerCase();
}

let player =  getHumanChoice();
console.log(player);

let humanScore = 0;
let computerScore = 0;

