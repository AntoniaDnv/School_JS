function examPreparation(input){
    let lastProblem = '';
    let n = 1;
    let counterUnsatisfactoryGrade = 0;
    let numOfProblems = 0;
    let totalGrades = 0;
    let unsatesfactoryGrades = input[0];
while(input[n] != "Enough"){
  if(n%2 == 0){

        let grade = Number(input[n]);
        totalGrades += grade;
        
        if(grade<=4){
            counterUnsatisfactoryGrade++;
        }
        if(counterUnsatisfactoryGrade>=unsatesfactoryGrades){
            console.log(`You need a break, ${counterUnsatisfactoryGrade} poor grades.`);
                return;
        }
        
    }
    else{
        numOfProblems++;
        lastProblem = input[n];
    }
     n++;
   
}
   
  
console.log(`Average score: ${(totalGrades/numOfProblems).toFixed(2)}`)
console.log(`Number of problems: ${numOfProblems}`);
console.log(`Last problem: ${lastProblem}`);
}


examPreparation(['2',
'Income',
'3',
'Game Info',
'6',
'Best Player',
'4'])