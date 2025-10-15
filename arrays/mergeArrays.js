function mergeArrays(arrOne, arrTwo){
    let biggerArr = [];
    let smallerArr = [];
    let arrThree =[];
    
    if(arrOne.length>arrTwo.length){
     biggerArr = arrOne;
     smallerArr = arrTwo;
    }
    else{
         biggerArr = arrTwo;
     smallerArr = arrOne;
    }
    
    for(let i =0; i<biggerArr.length; i++){
        if(i%2 == 0){
        let num = +biggerArr[i] + +smallerArr[i];
        arrThree.push(num);
       }
       else{
        arrThree.push(arrOne[i]+arrTwo[i])
       }
    }
    console.log(arrThree.join(' - '))
}
mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'])