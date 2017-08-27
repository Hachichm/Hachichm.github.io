

let easyWordList = ["bark", "john", "hello", "walk"];
let mediumWordList = ["pizza", "humans", "bicycle", "mayfair"];
let hardWordList = ["bandwagon", "hyphen", "jawbreaker", "jigsaw"];
let chosenWord = "";
let dash = "";
let incorrectGuesses = 0;
let manImages = new Array();

let charGuess = [];

function easySelected() {
    let randomNumber = Math.floor((Math.random() * easyWordList.length));
    chosenWord = easyWordList[randomNumber];
    chosenWord.toLowerCase();
    console.log(chosenWord);
    replaceWord();
}

function mediumSelected() {
    let randomNumber = Math.floor((Math.random() * mediumWordList.length));
    chosenWord = mediumWordList[randomNumber];
    chosenWord.toLowerCase();
    console.log(chosenWord);
    replaceWord();
}

function hardSelected() {
    let randomNumber = Math.floor((Math.random() * hardWordList.length));
    chosenWord = hardWordList[randomNumber];
    chosenWord.toLowerCase();
    console.log(chosenWord);
    replaceWord();
}

function replaceWord() {
    for (let i = 0; i < chosenWord.length; i++) {
        dash += "_";
    }
    document.getElementById("word").innerHTML = (dash);
}

function guessWord(userInput) {
    let b = document.getElementById("userInput").value;
    let match = 0;
    charGuess.push(b);
    document.getElementById("guesses").innerHTML = ("Letters guessed "+charGuess.toString());
    for (let i = 0; i < chosenWord.length; i++) {
        if (b === chosenWord[i]) {
            dash = setCharAt(dash, i, b)
            console.log(dash);
            match++;
        }
    }
    if (match === 0) {
        incorrectGuesses++;
        replaceHangMan();
    }
    endGame();
    console.log("incorrect guesses:" + incorrectGuesses);
}

function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substr(0, index) + chr + str.substr(index + 1);
}

function replaceHangMan() {
    document.getElementById("image").src = "img/" + incorrectGuesses + ".png";
}

function endGame() {
    if (incorrectGuesses === 7) {
        document.getElementById("endGame").innerHTML = "You Lose";
        document.getElementById("guessWord").disabled = true;
    }
}

function reset() {
    location.reload();
}
