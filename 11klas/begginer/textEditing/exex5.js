function replaceRepeatingChars(text){
    let outPut ='';
   for(let i = 0; i<text.length; i++){
    let currLetter = text[i];
    let nextLetter = text[i+1]
    if(currLetter != nextLetter){
        outPut += currLetter;
    }
   }
   console.log(outPut);
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')