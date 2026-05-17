//Your goal is to write a function that removes the first and last characters of a string. You're given one parameter, the original string.

//Important: Your function should handle strings of any length ≥ 2 characters. For strings with exactly 2 characters, return an empty string.


function removeChar(str){
  let mot = str.split("");
  let character = mot.slice(0, mot.length);
  console.log(character);
  return character;

};

