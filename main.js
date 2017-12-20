// Dependencies
const inquirer = require('inquirer')
const isLetter = require('is-letter')
// var word = require('./words.js')
var randomWords = require('./word.js')
// let hangmanDisplay = randomWords.newWord.hangman

// set maxListener
// require('events').EventEmitter.prototype._maxListeners = 100

var playGame = {
  wordBank: randomWords.wordBank,
  guesses: 0,
  guessedLetterArray: [],
  // display: 0,
  currentWord: null,
  startGame: function () {
    var selection = this
    if (this.guessedLetterArray.length > 0) {
      this.guessedLetterArray = []
    }
    inquirer.prompt([{
      name: 'play',
      type: 'confirm',
      message: 'Lets play Hangman!'
    }]).then(function (answer) {
      if (answer.play) {
        selection.newGame()
      } else {
        console.log('Goodbye!')
      }
    })
  },

  newGame: function () {
    if (guesses < 10 ) {
      console.log('Time to play Hangman!')
      console.log('-------------------------------')
      var randomNumber = Math.floor(Math.random() * this.wordBank.length)
      this.currentWord = new word(this.wordBank[randomNumber])
      this.currentWord.getLetters()
      console.log(this.currentWord.wordShow())
      this.keepPromptingUser()
      guessLeft++
    } 
    //   else {
    //   this.resetGuessesLeft()
    //   this.newGame()
    // }
  },

  // resetGuessesLeft: function () {
  //   this.guessesLeft = 10
  // },

  keepPromptingUser: function () {
    var selection = this
    inquirer.prompt([{
      name: 'chosenLetter',
      type: 'input',
      message: 'Please choose a letter: ',
      validate: function (value) {
        if (isLetter(value)) {
          return true
        } else {
          return false
        }
      }
    }]).then(function (ltr) {
      var letterReturned = (ltr.chosenLetter).toUpperCase()
      var alreadyGuessed = false
      for (var i = 0; i < selection.guessedLetterArray.length; i++) {
        if (letterReturned === selection.guessedLetterArray[i]) {
          alreadyGuessed = true
        }
      }
      if (alreadyGuessed === false) {
        selection.guessedLetterArray.push(letterReturned)
        let found = selection.currentWord.checkLetter(letterReturned)

        if (found === 0) {
          console.log('This letter is not in the word :(')
          selection.guesses++
          // selection.display++
          console.log('Guesses left: ' + selection.guessesLeft)
          console.log(hangmanDisplay[(selection.display) - 1])
          console.log('\n-------------------')
          console.log(selection.currentWord.wordShow())
          console.log('\n-------------------')
          console.log('Letters guessed: ' + selection.guessedLetterArray)

        } else {
          console.log('Correct!')

          if (selection.currentWord.wordCheck() === true) {
            console.log(selection.currentWord.wordShow())
            console.log('Congratulations! You won!')

          } else {
            console.log('Guesses left: ' + selection.guessesLeft)
            console.log(selection.currentWord.wordShow())
            console.log('\n-------------------')
            console.log('Letters used: ' + selection.guessedLetterArray)
          }
        }

        if (selection.guessesLeft > 0 && selection.currentWord.wordFound === false) {
          selection.keepPromptingUser()
        } else if (selection.guessesLeft === 0) {
          console.log('Game Over!  Please try again!')
          console.log('The word was: ' + selection.currentWord.word)
        }
      } else {
        console.log('Letter already used. Please try again.')
        selection.keepPromptingUser()
      }
    })
  }
}

playGame.startGame()