// Stores letters
var Letter = function (Letter) {
  this.letter = letter;
  this.show = false;

  this.displayletter = function () {
    if (this.letter === ' ') {
      this.appear = true;
      return ' ';
    } else if (this.appear === false) {
      return '_';
    } else {
      return this.letter;
    };
  };
};

module.exports = Letter;