function towns(input){
    input.forEach(element => {
         let inputTransformed = element.split(' | ');
        let obj = {};
        obj.town = inputTransformed[0];
        obj.latitude = +Number(inputTransformed[1]).toFixed(2);
        obj.longitude = +Number(inputTransformed[2]).toFixed(2);
            console.log(JSON.stringify(obj));
    });



}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);