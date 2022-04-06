//Build a function that takes an integer and returns a list of its multiples up to a value, limit. If limit is a multiple of integer, it should be included.


function findMultiples(integer, limit) {
  let array = new Array;
  for (let i = 1; i <= limit; i++) {
    if (i % integer === 0) {
      array.push(i);
    }
  }
  return array;
}
