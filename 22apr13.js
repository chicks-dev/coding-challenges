//Given an array of numbers, return the square root of each of those numbers. If a square root is not possible, square the numbers




function squareOrSquareRoot(array) {
  return array.map(element => Number.isInteger(Math.sqrt(element)) ? Math.sqrt(element) : (element * element))
  }
