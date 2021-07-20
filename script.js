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

console.log(computerPlay());
