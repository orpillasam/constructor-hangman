var Letter = require('./letter.js')

var wordBank = ['PUNISHER', 'DAREDEVIL', 'JESSICA JONES', 'LUKE CAGE', 'IRON FIST', 'DEFENDERS', 'ELEKTRA', 'KINGPIN'];

function Word (word) {
  // var selection = this;
  this.word = word;
  this.letters = [];
  this.wordFinished = false;


  this.randomWord = function(){
    let randomNumber = Math.floor(Math.random() * wordBank.length);
    this.currentWord = wordBank[randomNumber];
    this.lettersLength = currentWord.length;
    return this.currentWord;
  }

  this.splitWord = function() {
    this.lettersArray = this.split(""); 
    return this.lettersArray;
  }




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
    let whatToReturn = true;
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
    this.letters.forEach(function (ltr) {
      let currentLetter = ltr.letterShow();
      display += currentLetter;
    });
    return display;
  };
};



module.exports = Word;