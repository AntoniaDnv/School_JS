let obj = {
    name: "Nasko",
    age: 24 
}

obj.class = "11";

console.log(obj.class);

let object = {
    name: 'retro',
    age: 30,
    grade: '5.50'

};
console.log(object.name);

let person = {};
person.name = 'Peter';
person["last-Name"] = "Parker";
person.age = 20;
person.hairColor = 'black';

let people ={
    sayHello(){
        console.log('hi');
    }
}
console.log(Object.keys(people));
console.log(Object.values(people));
console.log(Object.entries(people));

console.log(people);

for(let key of Object.keys(object)){
    console.log(`${key}: ${object[key]}`)
}
let text = JSON.stringify(object); // object to json
//a object = JSON.parse(text); // json string to object

console.log(text, object)
class Student{
    constructor(name, grade){
        this.name = name;
        this.grade = grade;


    }
}

let student = new Student('Peter', 5.50);


// masiv v obekt

let person1 ={
    name: 'Alison',
    age: 20,
    city: 'Sofia',
    scores: [{
        theme: 'Geography',
        currentScores:[5,6,3]
    }, {
        theme: 'History',
        currentScores: [4,5,5]
    }
]
};


