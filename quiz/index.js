import {wordsGame} from './data.js'

const inputUser = document.getElementById('inputGameUser');
const inputGame = document.getElementById('piHiddenWord');
const button = document.getElementById('buttonRandom');

const counterGameOne = document.getElementById('counterTries');
const counterGametwo = document.getElementById('counterMistakes');

let wordsGameHidden = '';
let counter1 = 0;
let counter2 = 0;

const wordsArray = () => {
    wordsGame.split('').sort((Math.random -0.5).join(''));
}

const wordsArrayGame = () => {
    const currentWord = inputGame.Math.floor(Math.random * wordsArray.length);
    const wordUserGive = inputUser.value;
    wordsGameHidden = currentWord;
    inputGame.textContent = '';
    
}


wordsArrayGame ();
console.log(wordsArrayGame);

