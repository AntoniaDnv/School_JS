function negativeOrPositive(numbers){
    let newArr = [];
    for(let i = 0; i< numbers.length; i ++){
        if(numbers[i] >= 0 ){
         newArr.push(numbers[i]);
        }
        else{
            newArr.unshift(numbers[i]);
            
        }
    }
    newArr.forEach(element => {
        console.log(element);
    });
}
negativeOrPositive([7, -2, 8, 9])