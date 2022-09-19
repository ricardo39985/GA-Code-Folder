const prompt = require("prompt-sync")()
const game = {
    title: 'Guess the Number!',
    biggestNum: 8,
    smallestNum: 1,
    secretNum: null,
    play: function () {
        this.secretNum = Math.floor(Math.random() *
            (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
    }
};
game.previousGuesses = []
const getGuess = () => {
    let guess = parseInt(prompt(`Enter a guess between ${game.smallestNum} and ${game.biggestNum}\n`))
    while (shouldUserGuessAgain(guess)) {
        guess = parseInt(prompt(`Enter a guess between ${game.smallestNum} and ${game.biggestNum}\n`))
    }
    return guess
}
const play = () => {
    let guess = getGuess()
    game.secretNum = Math.floor(Math.random() * (game.biggestNum - game.smallestNum + 1) + game.smallestNum)
    while (guess != game.secretNum) {
        game.previousGuesses.push(guess)
        console.log(`Your guess is too`, guess > game.secretNum ? `high` : `low`)
        console.log(`Previous guesses: ${game.previousGuesses}`)
        guess = getGuess()
    }
    console.log(`Congrats you win!!\nThe number was ${game.secretNum}`)
}
function shouldUserGuessAgain(userGuess) {
    return isNaN(userGuess) || userGuess < game.smallestNum || userGuess > game.biggestNum
}
play()
