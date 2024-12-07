function mutiplicationOfMoreNums(numbers) {
    let num1 = numbers[0];
    let num2 = numbers[1];
    let num3 = numbers[2];
    let check = true;
  
    if (num1 < 0) {
      check = false;
    }
    if (num2 < 0 && check == false) {
      check = true;
    }
    if (num3 < 0 && check == false){
        check = true;
    } 
    else if (num3 < 0 && check != false)  {
      check = false;
    }
   
  
    if(check == true){
      console.log('Positive');
  
    }
    else{
      console.log('Negative');
    }
  
}
  mutiplicationOfMoreNums([2, 3, -1]);