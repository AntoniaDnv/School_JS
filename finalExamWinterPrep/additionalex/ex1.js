function objectExercise(inputArr){
    let people ={};
    for(let i = 0; i<inputArr.length; i++){
        
        let hasAdd = inputArr[i].startsWith("Add: ");
        let line = hasAdd? inputArr[i].replace("Add: ", "") : inputArr[i];
        
        let [name, age, score] = line.split(' - ');
        age = +age;
        score = +score;
        
        if(!people.hasOwnProperty(name) && hasAdd == false){
            
            people[name] = {
                Age: age,
                Score: score
            };
            
        }
        else if(hasAdd == true && people.hasOwnProperty(name)){
         people[name].Age += age;
         people[name].Score += score;
        }
        
        
    }
    let entrie = Object.entries(people);
    let sortedPoeple = entrie.sort((a,b) => a[0].localeCompare(b[0]))
  for (const personName in sortedPoeple) {
    const stats = people[personName];

    console.log(`>>> ${personName}`);
    for (const statName in stats) {
        const statValue = stats[statName]; 
        console.log(`  ${statName}: ${statValue}`);
    }
}

   
// let sorted = entries.sort((a, b) => b[0].localeCompare(a[0]));   locale compare used with strings
}
objectExercise(['Alice - 5', 'Bob - 10', 'Add: Alice - 2', 'Add: Tom - 4'])
objectExercise(['Tom - 3', 'Jerry - 7', 'Add: Alice - 3'])