    function arrayRotation(array, number){
    for(let i = 0; i<number; i++){
    let n =  array.shift();
    array.push(n);
    }
    console.log(array.join(' '))
    }
arrayRotation([51, 47, 32, 61, 21], 2)