function school(input){
  let schoolInfo ={};
  for(let i =0; i<input.length; i++){
    const el = input[i];
    if(el.includes('arrives')){
      let teacher = el.slice(0, el.indexOf(("arrives")- 1));
      if(!schoolInfo.hasOwnProperty(teacher)){
        schoolInfo[teacher] = {}
      }
    }else if(el.includes(':')){
        let [teacher, classInfo] = el.split(": ");
        let [className, stCount] = classInfo.split(', ');
        if(schoolInfo.hasOwnProperty(teacher)){
            schoolInfo[teacher][className] = +stCount;
        }
    } else if(el.includes("+")){
        let [className, stCount] = el.split(" + ");
        let schoolArr = Object.entries(el);
        let  currClass = schoolArr.find(([teacher, classInfo]) => classInfo.hasOwnProperty(className));
        if(currClass !== undefined){
            schoolInfo[currClass[0][className]] += +stCount;
        }

    } else if(el.includes('Quit')){
   let teacher = el.slice(0, el.indexOf('Quit') -1);
   if(schoolInfo.hasOwnProperty(teacher)){
    delete schoolInfo[teacher];
   }
    }
  };
  console.log(schoolInfo);
  let sortedTeacher = Object.entries(schoolInfo).sort((t1, t2) =>t2[1].totalCount - t1[1].totalCount)
  sortedTeacher.forEach(t => {
    console.log(`${t[0]}: ${t[1].totalCount}`);
    delete t[1].totalCount;
    let sortedClass = Object.entries(t[1]).sort((c1, c2) => c2[1] - c1[1]);
  })
}