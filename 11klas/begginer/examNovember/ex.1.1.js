 function sortingHat(array){
 let houses = {};

    for(let i = 0; i<array.length; i++){
        let [numberHouse, studentInfo] = array[i].split(" - ");
       if(!houses[numberHouse]){
            houses[numberHouse] = [];
        }
        let [nameBlood, type] = studentInfo.split(', ');
        let [name, blood] = nameBlood.split(':');


       let person = {

        Name: name,
        Blood: blood,
        Type: type,
       };
   
       houses[houseNumber].push({name, info: person});
    };
   for (const houseNumber in houses) {
    
        console.log(`House № ${houseNumber}`);
        console.log(`--- ${person.Name} - ${person.Blood}, Type - ${person.Type}`)
   
   }
   
}
sortingHat(['1 - Ron Weasley:Pure-blood, Type: Squib', '1 - Harry Potter: half-bloods,Wizardkind: Wizard', '2 - Hermione Granger: Muggle-born'])