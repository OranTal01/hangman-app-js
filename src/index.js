import { getPuzzle } from './requests';
import Hangman from './hangman';

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    renderGame()
});

const renderGame = () => {
    puzzleEl.innerHTML = ''
    guessesEl.textContent = game1.statusMessage

    game1.puzzle.split('').forEach(letter => {
        const letterEl = document.createElement('span');
        letterEl.textContent = letter;
        if (letter !== ' ') {
            letterEl.setAttribute('class', 'letter')
        }
        else {
            letterEl.setAttribute('class', 'letter--space')
        }
        puzzleEl.appendChild(letterEl)

    });
};

const startGame = async () => {
    const puzzle = await getPuzzle('2');
    game1 = new Hangman(puzzle, 8);
    renderGame()
};

document.querySelector('#easy').addEventListener('click', async () => {
    const puzzle = await getPuzzle('1');
    game1 = new Hangman(puzzle, 6);
    renderGame();
});

document.querySelector('#medium').addEventListener('click', () => {
    startGame()
});

document.querySelector('#Hard').addEventListener('click', async () => {
    const puzzle = await getPuzzle('3');
    game1 = new Hangman(puzzle, 10);
    renderGame();
});

startGame()