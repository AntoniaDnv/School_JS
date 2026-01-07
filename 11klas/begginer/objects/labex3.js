function convertToObject(json){
    let obj = JSON.parse(json);

    for (const key in obj) {
        const element = obj[key];
        
        console.log(`${key}: ${element}`)
    }
}