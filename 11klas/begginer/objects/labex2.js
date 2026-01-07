function cityInfo(city){
    for (const key in city) {
      
        const element = city[key];
       
             console.log(`${key} -> ${element}` )
      
    }
}
cityInfo({name: "Sofia", area: 492, population: 1238438, country: "Bulgaria", postCode: "1000"})