function biggerNumber(input){
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    if(firstNumber> secondNumber){
        console.log(firstNumber);
    } else{
        console.log(secondNumber);
    }
    
}
biggerNumber([10, 20])