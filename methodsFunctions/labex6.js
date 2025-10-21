function signCheck(numOne, numTwo, numThree){
  let arr = [numOne, numTwo, numThree];
  let result = arr.filter((num) =>num < 0);
  if(result.length%2 == 0){
    console.log('Positive')
  }
  else{
    console.log('Negative')
  }
}
signCheck(5, 12, -15)