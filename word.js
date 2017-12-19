var Letter = require('./letter.js')

function Word (word) {
  // var selection = this;
  this.word = word;
  this.letters = [];
  this.wordFinished = false;


  this.getLetters = function () {
    for (var i = 0; i < this.length; i++) {
      var newLetter = new Letter(this.word[i]);
      this.letters.push(newLetter);
    };
  };

  //checks to see if the letter is in the word
  this.wordCheck = function () {
    if (this.letters.every(function (ltr) {
      return ltr.appear === true;
    })) {
      this.wordFound = true;
      return true;
    };
  };


  this.checkLetter = function (guessedLetter) {
    let whatToReturn = 0
    this.letters.forEach(function (lttr) {
      if (lttr.letter === guessedLetter) {
        lttr.appear = true
        whatToReturn++;
      };
    });
    return whatToReturn;
  };


  this.wordShow = function () {
    let display = ''
    selection.letters.forEach(function (lttr) {
      let currentLetter = lttr.letterShow()
      display += currentLetter
    })
    return display
  }
}
module.exports = Word;