function cinema(type, row, cow){
    let projectionType = type;
 

    let ticketPrice;
    switch(projectionType){
       case "Premiere":
        ticketPrice = 12;
        break;
        case "Normal":
        ticketPrice = 7.5;
        break;
        case "Discount":
        ticketPrice = 5;
        break;
    }

    let totalSeats = Number(row) * Number(cow);
    let totalRevenue = totalSeats * ticketPrice;
    console.log(totalRevenue);
}
