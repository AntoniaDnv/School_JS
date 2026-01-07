function movie(input){
    let n = 0;
    let movieWithMostPoints = 0;
    let movieWithMostPointsName = '';
    while(input[n] != 'STOP'){
        
        let movieName = input[n];
        let moviesPoints = 0;
        
        for(let i = 0; i < movieName.length; i++){
          moviesPoints+= movieName.charCodeAt(i);
    
         }
        for(let j = 0; j< movieName.length; j++){
           if(movieName[j].match(/[a-z]/i)){
                let letterCheker = (movieName[j]).toLowerCase();
                if(movieName[j] == letterCheker && movieName[j] != ' '){
                    //the length of the movie title sum - *2
                    
                moviesPoints-= movieName.length*2;
                }
                else if(movieName[j] != ' ' && movieName[j] != letterCheker ){
                         moviesPoints-= movieName.length;  
                    }
           }
           
                    
                
        }
       
        if(moviesPoints>movieWithMostPoints){
            movieWithMostPointsName = movieName;
            movieWithMostPoints = moviesPoints;
        }
        
        if(n>=6){
            console.log('The title limit has been transferred.');
            console.log(`The movie tonight is ${movieWithMostPointsName} collected points: ${movieWithMostPoints}.`);
             return;
        }
        n++

       
    }

    console.log(`The movie tonight is ${movieWithMostPointsName} collected points: ${movieWithMostPoints}.`);
    

}



movie(['Django Unchained', 'Joker',
'Oldboy', 'Hamilton', 'Klaus',
'Inside Out', 'Prisoners'])