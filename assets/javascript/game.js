let wins = 0
let losses = 0

let alphabet = ['a','b','c','d','e','f','g','h','i','g','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let alphabetRandom = alphabet[Math.floor(Math.random() * alphabet.length)]

let guesses = []


let winsText = document.getElementById('wins-text')
let lossesText = document.getElementById('losses-text')
let guessesLeft = document.getElementById('guesses-left')
let guesses = document.getElementById('guesses')

console.log(alphabetRandom)