function summerOutfit(degrees, period){
    let outfit;
    let shoes;
    if(degrees>= 10 && degrees<=18){
        switch(period){
            case "Morning":
                outfit = "Sweatshirt";
                shoes = "Sneakers";
                break;
            default:
                 outfit = "Shirt";
                shoes = "Moccasins";
                break;
        }
    }
    else if(degrees> 18 && degrees<=24){
        switch(period){
            case "Afternoon":
                outfit = "T-Shirt";
                shoes = "Sandals";
                break;
                 default:
                 outfit = "Shirt";
                shoes = "Moccasins";
                break;

        }
    }
    else if(degrees>=25){
        switch(period){
            case "Morning":
                 outfit = "T-Shirt";
                shoes = "Sandals";
                break;
                case "Afternoon":
                    outfit = "Swimsuit";
                    shoes = "Barefoot";
                    break;
            case "Evening":
                 outfit = "Shirt";
                shoes = "Moccasins";
                break;
        }
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}
