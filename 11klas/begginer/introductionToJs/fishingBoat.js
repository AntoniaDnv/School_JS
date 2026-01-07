 function fishingBoat(buget, season, fishermen){
    let rentingPrice;
    switch(season){
        case"Spring":
        rentingPrice = 3000;
        break;
         case"Winter":
        rentingPrice = 2600;
        break;
        default:
        rentingPrice = 4200;
        break;
    }
    if(fishermen<=6){
        rentingPrice = rentingPrice -rentingPrice * 0.1;
    }
    else if(fishermen>6 && fishermen<=11){
        rentingPrice = rentingPrice - rentingPrice * 0.15;
    }
    else if(fishermen>=12){
        rentingPrice = rentingPrice - rentingPrice * 0.25;
    }

    if (fishermen%2 == 0 && season!="Autumn"){
        rentingPrice = rentingPrice - rentingPrice * 0.05;
    }

    if(buget>= rentingPrice){
        console.log(`Yes! You have ${(buget-rentingPrice).toFixed(2)} leva left.`);
    }
    else{
        console.log(`Not enough money! You need ${(rentingPrice-buget).toFixed(2)} leva.`);
    }
 }
 