//Given a non-empty array, remove every second element in the array. Always keep the first element.






function removeEveryOther(arr){
  return arr.filter((elem, index) => index % 2 === 0);
}
