function convertToJSON(name, lastName, hairColor){
    let obj = {};
    obj.name = name;
    obj.lastName = lastName;
    obj.hairColor = hairColor;

   let converted = JSON.stringify(obj);
    console.log(converted)
}
convertToJSON('George', 'Jones', 'Brown')