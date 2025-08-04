const wordsGame = [
    {
        word: 'gato',
        word: 'perro',
        word: 'elefante',
        word: 'animal'
    }
]

const inputUser = document.getElementById('inputGameUser');
const inputGame = document.getElementById('piHiddenWord');
const button = document.getElementById('buttonRandom');
const button2 = document.getElementById('buttonvalue');

const counterGameOne = document.getElementById('counterTries');
const counterGametwo = document.getElementById('counterMistakes');

let wordsGameHidden = '';
let counter1 = 0;
let counter2 = 0;

const wordsArray = () => {
    wordsGame.split('').sort((Math.random -0.5).join(''));
}

const wordsArrayGame = (word) => {
    const currentWord = wordsArray.Math.floor((Math.random * wordsGame.length));
    wordsGameHidden = currentWord;
    inputGame = wordsGameHidden[currentWord]
    counterGameOne = counter1;
    counterGametwo = counter2;
    const wordUserGive = inputUser.value;
    if (wordUserGive === currentWord) {
        counter1++
    } else {
        counter2++
    }

}


    // button.addEventListener(wordsArrayGame, word);
    // button2.addEventListener(wordsArrayGame);

wordsArrayGame ();
console.log(wordsArrayGame);

