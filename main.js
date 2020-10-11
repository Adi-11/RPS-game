const choices = ['paper', 'rock', 'scissors'];
const buttons = document.querySelectorAll('.pick')
const scoreEl = document.getElementById('score')
const main = document.getElementById('main');
const selection = document.getElementById('selection')
const reset = document.getElementById('reset')
const userSelect = document.getElementById('userSelect')
const houseSelect = document.getElementById
    ('houseSelect');

const winner = document.getElementById('winner')


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


reset.addEventListener('click', () => {
    main.style.display = 'flex';
    selection.style.display = 'none'
})

function checkWinner() {
    const computerChoice = pickRandomChoice();

    //update the interface
    updateSelection(userSelect, userChoice);
    updateSelection(houseSelect, computerChoice);


    if (userChoice === computerChoice) {
        // Draw
        winner.innerText = 'draw'
    } else if ((userChoice === 'paper' && computerChoice === 'rock') || (userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'scissors' && computerChoice === 'paper')) {
        maintainScore()
        winner.innerText = 'win'
    } else {
        //user lost
        // maintainScore(-1);
        winner.innerText = 'lost'
    }
    
    //shwo to the selection and hide main
    main.style.display = 'none';
    selection.style.display = 'flex'
    
}

function maintainScore() {
    score += 1

    scoreEl.innerText = score
}


function pickRandomChoice(){
    return choices[Math.floor(Math.random() * choices.length)]
}


function updateSelection(selectionEl, choice) {
    

    //class reset
    selectionEl.classList.remove('paper')
    selectionEl.classList.remove('rock')
    selectionEl.classList.remove('scissors')

    // update images
    selectionEl.classList.add(`${choice}`)
    selectionEl.querySelector('img').src = `./images/icon-${choice}.svg`
    selectionEl.querySelector('img').alt = choice
}