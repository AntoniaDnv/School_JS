function movies(input){
    let cinema = {};

    for(let i =0; i<input.length; i++){
        let command = input[i].split();
        if(command.includes('addMovie')){
            let name = command.slice(1);
        
            cinema.name = [name];
        }
        if()
    }
   
}