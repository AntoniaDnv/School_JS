function smallestTwoNumbers(numberArray){
    let sortedInAsc = numberArray.sort((a,b) =>{
        return a-b;
    })
    console.log((sortedInAsc.slice(0,2)).join(' '));
}
smallestTwoNumbers([30, 15, 50, 5])