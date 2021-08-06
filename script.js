// game logic
let playerSelection;
let computerSelection = computerPlay();

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

// DOM
const buttons = document.querySelectorAll('button');
const roundWinner = document.querySelector('#round-winner');

buttons.forEach(button => button.addEventListener('click', () => {
    selectShape(button);
}))


buttons.forEach(button => button.addEventListener('click', () => {
    roundWinner.textContent = playRound();
}))
