function addItem() {
    let input = document.getElementById('newItemText');
    let ul = document.getElementById('items');
    
    let li = document.createElement('li');
    let a = document.createElement('a');
    li.textContent = input.value;
    a.textContent = '[Delete]';
    a.setAttribute('href', '#');
    a.addEventListener('click', (ev => {
        ul.removeChild(li);
    }));
    
    
    li.appendChild(a);
    ul.appendChild(li);

    input.value = '';

    

}