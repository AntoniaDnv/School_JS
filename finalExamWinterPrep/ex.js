function winningTicket(inputCard){
let winningSymbols = ['#', '%', '*', '&'];
let regex = /[&]{6,10}|[*]{6,10}|[%]{6,10}|[#]{6,10}/;

if(inputCard.length == 20){
    let first = inputCard.slice(0,inputCard.length/2);
    let second = inputCard.slice(inputCard.length/2);
    let firstValid = regex.test(first);
    let secondValid = regex.test(second);
    if(firstValid && secondValid == true){
      let symbol = inputCard.split('').find(a=> winningSymbols.some(b => b.includes(a)));
      let numers = first.split('').filter(a=> winningSymbols.some(b=> b.includes(a)));
      let numers2 = second.split('').filter(a=> winningSymbols.some(b=> b.includes(a)));
      
      if(numers.length >= 10 && numers2.length == 10){
        return console.log( `Bingo! "${inputCard}" - ${numers.length} simbols: ${symbol}`);
      }
     return console.log( `Card has won a Line "${inputCard}" - ${numers.length} simbols: ${symbol}`);
    }
  return  console.log (`Card ${inputCard} - doesn't win`);
}
 return console.log(`Invalid Bingo Card`);
}
winningTicket('Bing&&&&&&Oo&&&&&&ye');
winningTicket("&&&&&&&&&&&&&&&&&&&&")
winningTicket('dgsa')   
winningTicket('skdhagsdncpotwnufmla')