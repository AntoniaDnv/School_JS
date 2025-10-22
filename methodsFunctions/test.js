function oddAndEvenSum(number){
    for(let i = 0; i<number.length; i++){
      let check =  number[i]% 2 == 0? true: false ;
      let sumEven;
      let oddsum
      if(check == true){
       sumEven += +number[i];
      }
      else{
        oddsum += +number[i];
      }
    }
    console.log(`Odd sum = ${oddsum}, Even sum = ${sumEven}`)
}
oddAndEvenSum(1000435)