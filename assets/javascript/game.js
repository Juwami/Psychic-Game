let wins = 0
let losses = 0
let guessesLeft = 10

let alphabet = ['a','b','c','d','e','f','g','h','i','j','g','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
// array of all letters of alphabet
let guesses = []
// open ended array of guesses - will need to add it

let winsText = document.getElementById('wins-text')
let lossesText = document.getElementById('losses-text')
let guessesLeftText = document.getElementById('guesses-left')
let guessesText = document.getElementById('guesses')

document.onkeypress = function(event) {
    let userGuess = event.key
    let alphabetRandom = alphabet[Math.floor(Math.random() * alphabet.length)]
    if (!alphabet.includes(userGuess)){
        alert('That is not a letter, try again')}
        else {
        if (userGuess === alphabetRandom) {
            wins++
            // wins++ adds to wins after userGuess equals the designated alphabet letter
            alert('You won!')
            guessesLeft = 10
            guesses.length = 0
        } else {
            if (guesses.includes(userGuess)) {
                // checks the array to see if userGuess is listed - with assistance of David
                alert('Already guessed. Try again')
            } else {
                guessesLeft--
                guesses.push(userGuess)
                // adds userGuess to the list of guesses in array
                if (guessesLeft === 0) {
                    losses++
                    alert('You lost!')
                    guessesLeft = 10
                    guesses.length = 0
                }
            }
        }
    }
    // below allows javascript to edit html 
    winsText.textContent = wins
    lossesText.textContent = losses
    guessesLeftText.textContent = guessesLeft
    guessesText.textContent = guesses

}