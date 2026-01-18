function sumTable() {
    let sum = document.getElementById('sum');
    let nums = [...document.querySelectorAll('tr td')];
    let temp = 0;
    for(let i = 1; i<nums.length-2; i+= 2){
   
        temp += +nums[i].textContent;
        console.log(Number(nums[i].textContent));
    }
    sum.textContent = +temp;

}