function catsInfo(catArray){
 let cats = [];
   class Cat{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
for(let i = 0; i<catArray.length; i++){
    let catData = catArray[i].split(' ');
    let [name, age] = catData;
    let cat = new Cat(name, age);
    cats.push(cat)
}
for (const cat of cats) {
    console.log(`${cat.name}, age ${cat.age} says Meow`)
}
}
catsInfo(['Mellow 2', 'Tom 5'])