function deleteByEmail() {
    let input = document.querySelector('input');
    let emails = document.querySelectorAll('tr td:nth-child(2)');
    let table = document.querySelector('table');
    array.forEach(el => {
        if(el.textContent == input.value){
            let curEl = el.parentElement;
            curEl.remove();
        }
        
    });
}