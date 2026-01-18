function deleteByEmail() {
    let td = [...document.querySelectorAll("tr td:nth-child(2)")];
    let input = document.querySelector('input');
    let result = document.getElementById('result');

    let match = td.filter(el => el.textContent == input.value);
    if(match.length != 0){
        match.array.forEach(element => {
            element.parentElement.remove();
        });
    }
    else{
        let errorMessage = document.createElement('p');
  
        result.textContent ="Not Found";
    }
    input.value = '';
}