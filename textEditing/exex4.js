function stringSubstring(searchedWord, sentence){
    let formatedSentence = sentence.toLowerCase().split(' ');
    for(let i = 0; i<formatedSentence.length; i++){
     if(searchedWord == formatedSentence[i]){
        console.log(searchedWord);
        return;
     }
    }
    console.log(`${searchedWord} not found!`);
}
stringSubstring('javascript',
'JavaScript is the best programming language')