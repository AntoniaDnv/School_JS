function subtract() {
    let firstNum = document.getElementById("firstNumber").value;
    let secondNum = document.getElementById("secondNumber").value;
   
    let substraction = Number(firstNum) - Number(secondNum);
  let calc  = document.getElementById("result").value = substraction ;

    document.getElementById("result").textContent = calc;

}