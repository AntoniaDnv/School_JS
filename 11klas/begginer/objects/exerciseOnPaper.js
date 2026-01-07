function checker(input){
    let storage =[];
    for(let i =0; i< input.length; i++){
        let [command, data] = input[i].split(', ');
        if(!storage.includes(data) && command == 'IN'){
                storage.push(data);
        }
        if (command == "OUT" && storage.includes(data)){
            let indx = storage.indexOf(data);
            storage = storage.slice(indx, 1);
        }
    }
    storage.forEach(element => {
        console.log(element);
    });
}

