function validate() {
    let input = document.getElementById('email');
    let pattern = /[a-z]+@[a-z]\.[a-z]+/
    input.addEventListener('blur', (ev) => {
        if(pattern.test(ev.target.value)){
            ev.target.removeAttribute('class');

        } else{
            ev.target.setAttribute('class', 'error');
        }
    })

}