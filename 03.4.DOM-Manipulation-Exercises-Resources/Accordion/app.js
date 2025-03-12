function toggle() {
    let accordion = document.getElementById('accordion');
    let extra = document.querySelector("#extra");
    let buttonText = document.getElementsByClassName("button")[0];
   
    if(extra.style.display == "none"){
       extra.style.display = "block";
       buttonText.textContent = 'Less';
       accordion.value = extra.value;
    }
    else{
        extra.style.display = "none";
        buttonText.textContent = 'More';
    }



}