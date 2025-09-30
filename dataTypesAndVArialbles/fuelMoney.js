function fuelMoney(inputDistance, inputPassangers, inputPrice){
    let distance = +inputDistance,
    passangers = +inputPassangers,
    price = +inputPrice;

    let totalFuel = (distance / 100) * 7 + (passangers * 100)/1000;
    let totalPrice = totalFuel * price;
    console.log(`Needed money for that trip is ${totalPrice}lv.`);
}