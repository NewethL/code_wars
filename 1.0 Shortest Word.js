//Simple, given a string of words, return the length of the shortest word(s).

//String will never be empty and you do not need to account for different data types.



function findShort(s) {
  let phrase = s.split(" ");
  return phrase.reduce((motCourt, motActuel) => {
    return motActuel.length < motCourt.length ? motActuel : motCourt;
  }).length;
}
