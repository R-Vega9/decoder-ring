// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    if (!shift||shift === 0 || shift < -25 || shift > 25){
      return false;
    }
    if(!encode){
      shift = shift *-1;
    }
    let message = input.toLowerCase(); // make all char in input lowercase
    let output = ""; //empty return value
    //loop through input
    for (let i =0; i <message.length; i++){
      let char =  message[i];
      if (char.match(/[a-z]/)){ // check if char is a letter
        let code = message.charCodeAt(i) + shift; //shift charcode of characters
        if (code > 122) {
          code = code -26;
        }
        if (code < 97) {
          code = code +26;
        }
        let shifted = String.fromCharCode(code)
        output += shifted;
      }
      else {
        output +=char
      }
    }
    return output;
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
