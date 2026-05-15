//Write a function which calculates the average of the numbers in a given array.

//Note: Empty arrays should return 0.



function findAverage(array) {
  let nmbNotes = array.length;
  let notes = array;
  let totalNotes = array.reduce((totalNotes, notes) => totalNotes + notes, 0);
  console.log(totalNotes);
  let moyenne = totalNotes / nmbNotes;
  return moyenne;
}
