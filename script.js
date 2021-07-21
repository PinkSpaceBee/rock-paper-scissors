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

function game() {
    let score = 0;
    let roundResult; 
    let gameResult;

    function playRound(playerSelection, computerSelection) {
        computerSelection = computerPlay(); // returns string value
        playerSelection = prompt('rock, paper os scissors?').toLocaleLowerCase();
        
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

    function countScore() {
        for(let i = 0; i < 5; i++) {
            playRound();
            console.log(roundResult);
    
            if (roundResult.includes('win')) {
                score++;
            } else if (roundResult.includes('lose')) {
                score--;
            } else {
                score;
            }
        }

        return score;
    }

    countScore();
    
    gameResult = score < 0 ? 'You lost the game'
        : score > 0 ? 'You won the game, congrats!'
        : 'the game is a tie';

    console.log(gameResult);
}