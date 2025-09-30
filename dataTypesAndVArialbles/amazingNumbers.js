function amazingNumbers(input){
    let number = input.toString();
    let sum = 0;
    for(let i = 0; i< number.length; i++){
     
        sum += Number(number[i]);
    }
   
    let tOrF = sum.toString().includes('9') ? 'True' : 'False';

    console.log(`${number} Amazing? ${tOrF}`);
}

