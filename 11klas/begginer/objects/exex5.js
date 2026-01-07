function inventory(input){
    let arr = [];
    for(let i = 0; i<input.length; i++){
       const [name, level, items] = input[i].split("/");

       let hero = {
        Hero:name,
        level: level,
        items: items,
       };

       arr.push(hero);
    };
    let sortedArr = arr.sort((a,b) => +a.level - +b.level);
    sortedArr.forEach((hero) => {
        console.log(`Hero: {hero.Hero}\nlevel : ${hero.level}\nItems : ${hero.items}`)
    });
}

inventory([
    
])