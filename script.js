// game logic
let playerSelection;
let computerSelection;
let scoreCount;
let gameResult;
let humanPoints = 0;
let machinePoints = 0;
let roundsPlayed = 0;

function computerPlay() {

    function getRandomNum(min, max) {
        let randomNum = min + Math.random() * (max + 1 - min);
        return Math.floor(randomNum);
    }

    function playComputerRound() {

        switch (getRandomNum(0, 2)) {
            case 0: 
            return 'rock';
            break;

            case 1: 
            return 'paper';
            break;

            case 2: 
            return 'scissors';
            break;
        }
    }

    return playComputerRound();
}

function selectShape(btn) {
    playerSelection = btn.textContent.toLowerCase();
    return playerSelection;
}

function playRound() {
    /* I know this looks awful and a simple comparison of the playerSelecton and the computerSelection would do the trick (also, it would be much easier to read and understand), but I wanted to have some fun :D */

    computerSelection = computerPlay();
    let roundResult;

    let combinations = ['rock','paper','scissors','rock','paper','scissors','rock'];

    if (playerSelection === computerSelection) {
        roundResult = `It's a tie!`;
    } else if (combinations.join('').includes(playerSelection + computerSelection)) { 
        roundResult = `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        roundResult = `You win! ${playerSelection} beats ${computerSelection}`;
    }

    return roundResult;

}

function keepScore() {
    ++roundsPlayed; 
    if (roundWinner.textContent.includes('win') && roundsPlayed < 5) {
        humanPoints += 1;
        return `${humanPoints} : ${machinePoints}, ${roundsPlayed}`;
    } else if (roundWinner.textContent.includes('lose') && roundsPlayed < 5) {
        machinePoints += 1;
        return `${humanPoints} : ${machinePoints}, ${roundsPlayed}`;
    } else if (roundsPlayed < 5) {
        return `${humanPoints} : ${machinePoints}, ${roundsPlayed}`;
    } else if (roundsPlayed >= 5) {
        roundsPlayed = 0;
        humanPoints = 0;
        machinePoints = 0;
    }
}

function game() {
    if (roundsPlayed < 4) {
        return playRound();
    } else if (roundsPlayed >= 4 && humanPoints > machinePoints) {
        return `${roundWinner.textContent = `Huh, guess you won this time`}`;
    } else if (roundsPlayed >=4 && machinePoints > humanPoints) {
        return `${roundWinner.textContent = `Machines won!`}`;
    } else {
        return `${roundWinner.textContent = `A tie, really?`}`;
    }
}

// DOM
const buttons = document.querySelectorAll('button');
const roundWinner = document.querySelector('#round-winner');
const scoreDisplay = document.querySelector('#score');

buttons.forEach(button => button.addEventListener('click', () => {
    selectShape(button);
    roundWinner.textContent = game();
    scoreDisplay.textContent = keepScore();
}))
