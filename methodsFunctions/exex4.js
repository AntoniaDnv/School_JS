function oddAndEvenSum(number){
    let sumEven = 0;
    let oddsum = 0;
    let arr = number.toString().split('');
    arr.forEach(element => {
        if(+element % 2 == 0 ){
       sumEven += +element;
      }
      else{
        oddsum += +element;
      }
    
   
    });
         console.log(`Odd sum = ${oddsum}, Even sum = ${sumEven}`);
}
oddAndEvenSum(1000435);