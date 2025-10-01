function bigestNumber(input){
    let n = 0;
    let biggestNum = Number.MIN_VALUE;
    while(input[n] != "Stop"){
        let num = +input[n];
        
        if(num> biggestNum){
            biggestNum = num;
        }
        n++;
    }
    console.log(biggestNum);
 
}
