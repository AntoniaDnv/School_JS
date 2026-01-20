function deleteByID() {
   
let id = document.querySelector('input');
let information = [...document.querySelectorAll("tr td:nth-child(3)")];
let result = document.getElementById('result');
let match = information.filter(el => el.textContent == id.value);
    console.log(id.value);
    console.log(information);
if(match.length > 0){
     match.forEach( el => {el.parentElement.remove();});
     result.textContent = "Deleted";
    }
  else{
        result.textContent = 'Not found.';
  }
   
 id.textContent = '';
}