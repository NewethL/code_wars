//In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your ffunction receives one side of the DNA (string, except for Haskell); 
//you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function dnaStrand(dna){
  let dnareplace = dna.replace(/A/g, 't').replace(/T/g, 'a').replace(/C/g, 'g').replace(/G/g, 'c').toUpperCase();
  return dnareplace
}
