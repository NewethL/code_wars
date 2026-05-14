//altERnaTIng cAsE <=> ALTerNAtiNG CaSe
//Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; 
//see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:
String.prototype.toAlternatingCase = function () {
  const strCopy = this.split("");
  let recomposedString = ""
  for (let index = 0; index < strCopy.length; index++) {
    let currentLetter = strCopy[index];
    if (currentLetter === currentLetter.toUpperCase()) {
      recomposedString += currentLetter.toLowerCase();
    }
    else {
      recomposedString += currentLetter.toUpperCase();
    } 
  }
  return recomposedString
}
