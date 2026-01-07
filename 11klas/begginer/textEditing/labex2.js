function modernTimes(sentence){
    let words = sentence.split(' ');
    for(let i =0; i<words.length; i++){
        if(words[i].startsWith("#")){

            let word = words[i].slice(1);
            let isAlphabetic = /^[A-Za-z]+$/.test(word);
            if(isAlphabetic){
                console.log(word);
            }
        }
    }
}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')