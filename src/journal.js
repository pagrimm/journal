function Journal(title, body) {
  this.title = title;
  this.body = body;
}

Journal.prototype.countWords = function () {
  let output = this.body.split(" ");
  return output.length;
}

Journal.prototype.countLetters = function () {
  
  let totalVowels = 0;
  let totalConsonants = 0;
  for (i = 0; i < this.body.length < i++) {
    if (this.body.charAt(i))
  }
}

function checkIfVowel (letter) {
  const vowels = ["a", "e", "i", "o", "u"];
  for (i = 0; i < vowels.length; i++) {
    if (letter === vowels[i]){
      return true;
    } else {
      return false;
    }
  }
}