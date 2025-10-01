function accountBalance(input){
    let n = 0;
    let totalM = 0;
    while(input[n] != "NoMoreMoney"){
        if(input[n]>=0){
            console.log(`Increase: ${Number(input[n]).toFixed(2)}`);
            totalM+= +input[n];
        }
        else{
            console.log('Invalid operation!')
        }
        n++;
    }
    console.log(`Total: ${totalM.toFixed(2)}`);
    
}