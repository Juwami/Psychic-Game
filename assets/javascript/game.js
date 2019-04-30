let wins = 0
let losses = 0
let guessesLeft = 10

let alphabet = ['a','b','c','d','e','f','g','h','i','g','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let guesses = []

let winsText = document.getElementById('wins-text')
let lossesText = document.getElementById('losses-text')
let guessesLeftText = document.getElementById('guesses-left')
let guessesText = document.getElementById('guesses')

document.onkeypress = function(event) {
    let userGuess = event.key
    let alphabetRandom = alphabet[Math.floor(Math.random() * alphabet.length)]

    if (userGuess === alphabetRandom) {
        wins++
        alert('You won!')
        guessesLeft = 10
        guesses.Length = 0
    } else {
        if (guesses.includes(userGuess)) {
            alert('Already guessed. Try again')
        } else {
            guessesLeft--
            guesses.push(userGuess)
            if (guessesLeft === 0) {
                losses++
                alert('You lost!')
                guessesLeft = 10
                guesses.length = 0
            }
        }
    }

    winsText.textContent = wins
    lossesText.textContent = losses
    guessesLeftText.textContent = guessesLeft
    guessesText.textContent = guesses

}