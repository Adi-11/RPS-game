const choices = ['paper', 'rock', 'scissors'];
const buttons = document.querySelectorAll('.btn-ways')
const scoreEl = document.getElementById('score')

let score = 0;
// console.log(pickRandomChoice());
let userChoice = undefined;

buttons.forEach(button =>{
    button.addEventListener('click', () => {
        userChoice = button.getAttribute('data-choice')
        console.log(userChoice)

        checkWinner();
    })
})

function checkWinner() {
    const computerChoice = pickRandomChoice();

    if (userChoice === computerChoice) {
        // Draw
    }
    else if (userChoice === 'paper' && computerChoice === 'rock' || userChoice === 'rock' && computerChoice === 'scissors' || userChoice === 'scissors' && computerChoice === 'paper') {
        maintainScore(1);
    } else {
        //user lost
        maintainScore(-1);
    }
}

function maintainScore(value) {
    score += value

    scoreEl.innerText = score
}


function pickRandomChoice(){
    return choices[Math.floor(Math.random() * choices.length)]
}

