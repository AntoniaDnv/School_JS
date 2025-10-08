function walking(input){
    let totalSteps = 0;
 for(let i = 0; i< input.length; i++){
 
   if(input[i] === 'Going home'){
    totalSteps+= input[i+1];
    
    if(totalSteps>=10000){
        console.log('Goal reached! Good job!')
        if(totalSteps> 10000){
            console.log(`${totalSteps-10000} steps over the goal!`)
        }
    }
    else{
        console.log(`${10000-totalSteps} more steps to reach goal.`)
    }
   }
   else{
    totalSteps+= +input[i];
   }
 }
}
walking(['1500',
'Going home',
'2000'])