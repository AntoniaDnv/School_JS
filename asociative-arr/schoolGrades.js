function SchoolGrades(input){
    let obj = {};
    for(let i = 0; i< input.length; i++){
        const [name, ...grades] = input[i].split(' ');
        if(obj.hasOwnProperty(name)){
            obj[name] = obj[name].concat(grades)
        }
        else{
            obj[name] = grades;
        }

    }
for (const key in obj) {
    let sumOfGrades = 0;

    for(const grade of onj[key]){
        sumOfGrades += +grade;
    };
    obj[key] = {
        grades: obj[key],
        avg: sumOfGrades / obj[key].length
    }

    let sortedArr = Object.keys(obj).sort
    
}
}