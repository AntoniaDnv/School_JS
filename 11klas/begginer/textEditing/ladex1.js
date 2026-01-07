 function revealWords(words, sentences){
    let wordsEdited = words.split(', ');
    
  for(let i = 0; i< wordsEdited.length; i++)
  {
    let word = wordsEdited[i];
    let temp = '*'.repeat(word.length);
    sentences = sentences.replace(temp, word);
  }
  console.log(sentences);
}
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages')