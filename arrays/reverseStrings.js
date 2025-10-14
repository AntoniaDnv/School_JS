function reverseStrings(array){
    for(let i = 0; i<array.length-4; i++){
    let el = array.pop();
       array.unshift(el);
    }
        
   
    console.log(array.join(' '));
}
reverseStrings(
['a',
'b',
'c',
'd',
'e'])