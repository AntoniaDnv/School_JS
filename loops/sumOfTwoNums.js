function sumTwoNumbers(start, end, magicNum){
    let numOfCombination = 0;
    for(let i = start; i<= end; i++){
        for(j = start; j<=end; j++){
            numOfCombination++;
            if(i+j === magicNum){
                console.log(`Combination N:${numOfCombination} (${i} + ${j} = ${magicNum})`);
                return;
            }
        }
    }
    console.log(`${numOfCombination} combinations - neither equals ${magicNum}`);
}
