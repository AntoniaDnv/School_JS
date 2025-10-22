function palindromeIntegers(array){
for(let i = 0; i<array.length; i++){
    let reverse = array[i].toString().split('').reverse().join();
    let basik = array[i].toString().split('').join();
    if(basik == reverse){
        console.log('true');
    }
    else{
        console.log('false')
    }
}
}
palindromeIntegers(
[123,323,421,121])