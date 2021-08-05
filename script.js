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
let playerSelection;
let computerSelection;

function selectAShape(btn) {
    playerSelection = btn.textContent.toLowerCase();
    return playerSelection;
}
function game() {
    function playRound() {
        playerSelection = selectAShape();
        computerSelection = computerPlay(); // returns string value
        
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

    
   console.log(playRound());
}

/* My notes. Works correctly, just need to add the logic that determines
* the winner and make it look pretty 
const buttons = document.querySelectorAll('button');

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

let playerSelection;
let computerSelection = computerPlay();
computerPlay();


function selectAShape(btn) {
    playerSelection = btn.textContent.toLowerCase();
    return playerSelection;
}

function playRound() {
    return playerSelection + ' ' + computerPlay();
}


buttons.forEach(button => button.addEventListener('click', () => {
    selectAShape(button);
}))

buttons.forEach(button => button.addEventListener('click', () => {
    console.log(playRound())
}))
*/