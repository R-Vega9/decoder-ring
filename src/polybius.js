// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  
  function polybius(input, encode = true) {
    const numbers =["11","21", "31", "41", "51","12", "22", "32", "42", "52", "13", "23", "33", "43", "53", "14", "24", "34", "44", "54", "15", "25", "35", "45", "55"]
    const letters =["a", "b", "c", "d", "e", "f", "g", "h", "i/j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    //code block if encode is true
    if (encode){
      let output ="";
      let message = input.toLowerCase();
      //loop through input
      for (let i =0; i < message.length; i++){
        let char = message[i];
        //match letters with numbers
        if (/[a-z]/.test(char)){
          let num = letters.indexOf(char);
          output += (char ==="i" || char === "j" ? "42": numbers[num])
          }
        else {
          output += char; // return characters that are not letters
        }
      }
      return output;
    }
    else {
      const words = input.split(' '); //split into array of words
      if (!words.every(word => word.length % 2 === 0)) {
      return false; //if word doesnt have even # of chars then return false
}

    const message = words.map(word => {
      return word
      .match(/.{2}/g) //split into array of letter pairs then map through those.
      .map(pair => {
        if (pair === '42') {
        return '(i/j)';
      } else {
        return letters[numbers.indexOf(pair)];
      }
    })
    .join('');
});

return message.join(' ');
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
