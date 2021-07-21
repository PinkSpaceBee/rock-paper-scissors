function computerPlay() {

    function getRandomNum(min, max) {
        let randomNum = min + Math.random() * (max + 1 - min);
        return Math.floor(randomNum);
    }

    function assignNumToShape() {

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

    return assignNumToShape();
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay(); // returns string value
    playerSelection = prompt('rock, paper os scissors?').toLocaleLowerCase();
    
    let combinations = ['rock','paper','scissors','rock','paper','scissors','rock'];

    if (playerSelection === computerSelection) {
        return `It's a tie!`;
    } else if (combinations.join('').includes(playerSelection + computerSelection)) {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
}