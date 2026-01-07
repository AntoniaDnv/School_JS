function commonElements(arrOne, arrTwo){
    let biggerArr = [];
    let smallerArr = [];
    if(arrOne.length>arrTwo.length){
     biggerArr = arrOne;
     smallerArr = arrTwo;
    }
    else{
         biggerArr = arrTwo;
     smallerArr = arrOne;
    }
    
    for(let i = 0; i<biggerArr.length; i++){
        if(biggerArr.includes(smallerArr[i])){
            console.log(smallerArr[i]);
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2'])