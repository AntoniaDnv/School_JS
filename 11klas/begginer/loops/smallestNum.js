function smallestNumber(input){
    let n = 0;
    let smallestNum = Number.MAX_VALUE;
    while(input[n] != "Stop"){
        let num = +input[n];
        
        if(num< smallestNum){
            smallestNum = num;
        }
        n++;
    }
    console.log(smallestNum);
 
}
