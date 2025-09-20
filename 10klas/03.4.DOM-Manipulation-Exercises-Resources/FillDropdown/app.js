function addItem() {
    let menu = document.getElementById("menu");
    let newItemText = document.getElementById("newItemText").value;
    let newItemValue = document.getElementById("newItemValue").value;

    let newOption = document.createElement('option');
    newOption.textContent = newItemText;
    newOption.setAttribute('value', newItemValue);

    menu.appendChild(newOption);
}