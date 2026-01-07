    function building(floors, rooms){
        for(let i = floors; i>=1; i--){
           
            let letter;
            
            if(floors-i == 0){
                letter = 'L';
                
            }
            else if(i%2 ==0){
                letter = 'O';
                
            }
            else{
                letter = 'A';

            }
            let floorArr = [];
            for(let j = 0; j< rooms; j++){
               
                let appartmatI = letter + i +j;
                floorArr.push(appartmatI);
            }
           console.log(floorArr.join(' '));
           floorArr = [];
           
        }
    }
    building(6, 4)