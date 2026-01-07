function pascalCaseSplitter(text){
    let lowerText = text.toLowerCase();
    let word = text[0];
    let words = [];
    for(let i =1; i<=text.length; i++){
        if(lowerText[i] == text[i] && i != text.length){
            word+= text[i];
        }
        else{
            words.push(word);
            word = text[i];
        }
    }
    console.log(words.join(', '));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')