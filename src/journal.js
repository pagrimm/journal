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
  let outputArray = [];
  for (i = 0; i < this.body.length; i++) {
    if (/[a-zA-Z]/.test(this.body.charAt(i)) === true) {
      if (checkIfVowel(this.body.charAt(i).toLowerCase()) === true) {
        totalVowels += 1;
        console.log(totalVowels);
      } else {
        totalConsonants += 1;
        console.log(totalConsonants);
      }
    }
  }
  outputArray = [totalVowels, totalConsonants];
  return outputArray;
}

Journal.prototype.getTeaser = function () {
  let output = "";
  let outputArray = [];
  for (i = 0; i < 8; i++) {
    outputArray.push(this.body.split(" ")[i]);
  }
  output = outputArray.join(" ");
  for (i = 0; i < output.length; i++) {
    if (output.charAt(i) === ".") {
      output = output.slice(0, i + 1);
    }
  }
  return output;
}

function checkIfVowel (letter) {
  const vowels = ["a", "e", "i", "o", "u"];
  for (n = 0; n < vowels.length; n++) {
    if (letter === vowels[n]){
      return true;
    }
  }
  return false;
}

