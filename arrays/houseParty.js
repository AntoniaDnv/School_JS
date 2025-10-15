function houseParty(commands){
    let array =[];
    for(let i =0; i<commands.length; i++){
        let[name,...splitedArr] = commands[i].split(' ');
        
        if(splitedArr.length == 2 ){
            if(!array.includes(name)){
                array.push(name);
            }
            else{
                console.log(`${name} is already in the list!`)
            }
        }
        else if(splitedArr.length == 3 && splitedArr[1] == 'not'){
            if(!array.includes(name)){
                console.log(`${name} is not in the list!`)
            }
            else{
                let index = array.indexOf(name);
                array.splice(index, 1);
            }
           
        }
        
    }
    array.forEach(element => {
        console.log(element);
    });
}

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!'])