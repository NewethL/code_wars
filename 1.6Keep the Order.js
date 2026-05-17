// SELON LE KATA ça MARCHE PO JCOMPRENDS PAS PK :(
//Task:
//Your job here is to write a function (keepOrder in JS/CoffeeScript, keep_order in Ruby/Crystal/Python, keeporder in Julia), 
//which takes a sorted array ary and a value val, and returns the lowest index where you could insert val to maintain the sorted-ness of the array.
//The input array will always be sorted in ascending order. It may contain duplicates.

function keepOrder(ary, val) {
  let tabval = val.toString().split("");
  let tabfusion = [...ary, ...tabval].map(x => Number(x)).sort((a, b) => a - b);
  return tabfusion
}
