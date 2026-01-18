function addItem() {
    let input = document.getElementById('newItemText');
    let ul = document.getElementById('Items');
    
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.textContent = '[Delete]';
    a.setAttribute('href', '#');
    a.addEventListener('click' (ev => {
        console.log(ev);
    }));
    li.textContent = input.value;
    
    li.appendChild(a);
    ul.appendChild(li);

    input.value = '';

    

}