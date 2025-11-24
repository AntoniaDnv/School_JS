function phoneBook(input){
    let phoneBook = {};
    for(let line of input){
            let tockens = line.split(' ');
            let name = tockens[0];
            let number = tockens[1];
            phoneBook[name] = number; 
    }
    for(let key in phoneBook){
      
        console.log(`${key} -> ${phoneBook[key]}`); 
    }
}