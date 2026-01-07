function task2(input){
let [n, ...rest] = input;

let movies ={};

for(let i =0; i<n; i++){
    let [title, buget] = rest[i].split(":::");
    if(!movies.hasOwnProperty(title)){
        movies[title] = {Buget: +buget, Score: 0};
    }
    else{
        movies[title].Buget = +buget;
    }
   
}
let checker = true;
while(checker){
    let temp = +n + 1;
   
    let [command, rest] = input[temp].split(" => ");
    let [title,other] = rest.split(" | ");
    if(command == "Score"){
     movies[title].Score += +other;
    } 
    else if(command == "Revise"){
     movies[title].Buget = +other;
    } 
    else if( command == "Clear"){
     movies[title].Score = 0;
    }
  
    if(input[temp+ +1] == "EndFestival"){
        checker = false;
    
    }
      n++;
}

    console.log("Movies for the festival:")
    for (const key in movies) {
    
        
        const elements = movies[key];
        
        console.log(`-${key}; Buget: ${elements.Buget}; Score: ${(elements.Score.toFixed(2))};`)
    }
}  
task2([
'2',
'Inception:::160',
'Arrival:::47',
'Score => Arrival | 7',
'Score => Inception | 6',
'EndFestival'
])