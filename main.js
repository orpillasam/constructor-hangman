// Dependencies
const inquirer = require('inquirer')
const isLetter = require('is-letter')
// var word = require('./words.js')
var words = require('./word.js')




var playHangman = function () {
  var count = 0;
  var guessesLeft = 8;
  var gameWord = words.randomWord;
  var letterArray = words.splitWord;
  var blankArray = [];
  var guessedLettersArray = [];
  var wordLetterArray = randomWords.wordBank;

  if (count < 8) {
    inquirer.prompt([
    {
      type: "input",
      name: "letter",
      message: "Please guess a letter!"
      } 
    ]).then(function (answer) {

      var letterGuessed = (answer.letter).toUpperCase();
      var guessedAlready = false;

      for (var i = 0; i < lettersArray.length; i++){
        if (letterGuessed === lettersArray[i]){
          blankArray[i] = answer.letter
          guessedAlready = true;
        }
      }
        if (guessedAlready === false) {
          guessedLettersArray.push(letterGuessed);
          let letterFound = gameWord.words.checkLetter(letterGuessed);
          if (letterFound === true){
          console.log("Incorrect guesses: " + guessedLettersArray.split("")); 
          console.log("--------------------------------------");
          console.log("You have " + guessesLeft + "left.");
          }
          else {
            console.log("Correct Guess!");

            if (blankArray.join() === lettersArray.join()){
              console.log("You win!")
            }
            else {
              count++;
              guessesLeft--;
              console.log("Guesses left: " + guessesleft);
            }

          }
          //still need to code the finish and loop of this code

        


        }
    })
  }
}










playHangman();