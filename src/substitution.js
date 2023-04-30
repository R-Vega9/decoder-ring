// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    if (typeof alphabet !== "string"|| alphabet.length !== 26 || new Set(alphabet).size !== 26){
      return false;
    }
    const alphabetArray = alphabet.split("");
    const arrayOfLetters = ["a","b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    //create function that compares two sets of strings
    const transform = (encodingKey,decodingKey)=>{
      let result ="";
      let inputInLowerCase = input.toLowerCase();
      for(let i=0; i < inputInLowerCase.length; i++){
        let character = inputInLowerCase[i];
        //get any character but space
        if(character.match(/[^ ]/)){
          let index = encodingKey.indexOf(character);// find index of character
          result += decodingKey[index] // add the letter that matches with the index of the character
        } else{
          result+= character; // adds spaces to result
        }
      }
      return result;
    }
    if(encode){
      let output = transform(arrayOfLetters, alphabetArray);
      return output;
    } else{
      let output = transform(alphabetArray, arrayOfLetters);
      return output;
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
