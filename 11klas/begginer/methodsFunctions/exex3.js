function charactersInRange(firstChar, secondChar){
    let first;
    let last;
    if(firstChar.charCodeAt(0) < secondChar.charCodeAt(0)){
    first = firstChar.charCodeAt(0);
    last = secondChar.charCodeAt(0);
    }
    else{
    last = firstChar.charCodeAt(0);
    first = secondChar.charCodeAt(0);
    }
 
    let arr = [];
    
    for(let i = first; i<last; i++){
        if(i+1 !== last){
        arr.push(String.fromCharCode(i+1));
        }
       
    }
    console.log(arr.join(' '))
}
charactersInRange('a', 'd')