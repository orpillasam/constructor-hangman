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
    let whatToReturn = 0;
    this.letters.forEach(function (ltr) {
      if (ltr.letter === guessedLetter) {
        ltr.appear = true;
        whatToReturn++;
      };
    });
    return whatToReturn;
  };


  this.wordShow = function () {
    let display = '';
    selection.letters.forEach(function (ltr) {
      let currentLetter = ltr.letterShow();
      display += currentLetter;
    });
    return display;
  };
};

var wordBank = ['PUNISHER', 'DAREDEVIL', 'JESSICA JONES', 'LUKE CAGE', 'IRON FIST', 'DEFENDERS', 'ELEKTRA', 'KINGPIN'];

module.exports = Word;