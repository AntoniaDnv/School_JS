function toggle() {
   let extra = document.getElementById('extra');
   let button = document.getElementsByClassName('button')[0]
   if(extra.style.display = "none"){
    extra.style.display = 'block';
    button.textContent = "LESS";
   }
   else{
    extra.style.display = 'flex';
   
   }
}