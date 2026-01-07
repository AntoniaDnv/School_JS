function formatGrade(grade){
   if(grade<3.00){
    console.log(`Fail (${grade.toFixed(2)})`);
   }
   if(grade>= 3.00 && grade<= 3.5){
    console.log(`Poor (${grade.toFixed(2)})`);
   }
   if(grade>= 3.50 && grade<= 4.5){
    console.log(`Good (${grade.toFixed(2)})`);
   }
   if(grade>= 4.50 && grade< 5.5){
    console.log(`Very good (${grade.toFixed(2)})`);
   }
   if(grade>= 5.5 ){
    console.log(`Excellent (${grade.toFixed(2)})`);
   }
}
formatGrade(3.33)