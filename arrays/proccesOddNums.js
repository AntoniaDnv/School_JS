function processOddNumbers(numberArray){
    let newarr=[];
    for(let i = 0; i<=numberArray.length-1; i++){
     if(i%2 != 0){
        newarr.unshift(numberArray[i]*2);
     }
    }
    console.log(newarr.join(' '))
}
processOddNumbers([10, 15, 20, 25])