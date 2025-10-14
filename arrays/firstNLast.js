function firstAndLastKNumbers(numbers){
    let k = numbers[0];
    let first = numbers.slice(1, k+1);
    let last = numbers.slice(-k);
   
    console.log(first.join(' '));
    console.log(last.join(' '));

    
}

firstAndLastKNumbers([2,
7, 8, 9])