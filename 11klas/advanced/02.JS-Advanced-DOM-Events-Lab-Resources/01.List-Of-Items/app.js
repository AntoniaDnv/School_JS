function addItem() {
      let input = document.getElementById('newItemText');
    let ul = document.getElementById('Items');
    
    let li = document.createElement('li');
    li.textContent = input.value;
    ul.appendChild(li);
    input.value = '';
}