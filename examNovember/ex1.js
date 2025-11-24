function sortingHat(array){
    let houses = {};
   
   for(let i = 0; i<array.length; i++){
     let [numberHouse, studentInfo] = array[i].split(" - ");
     if(!houses[numberHouse]){
            houses.numberHouse = numberHouse;
        }
        let [nameBlood, type] = studentInfo.split(', ');
        let [name, blood] = nameBlood.split(':');

        houses.numberHouse.push(name);
       ;
        houses[name].type = type;
   }
   
   for(person in houses[numberHouse]){
        console.log(`House № ${houses[numberHouse]}`);

        console.log(`--- ${person.name}, ${person.type}`);
    }
    
       
   
}

sortingHat(['1 - Ron Weasley:Pure-blood, Type: Squib', '1 - Harry Potter: half-bloods,Wizardkind: Wizard', '2 - Hermione Granger: Muggle-born'])