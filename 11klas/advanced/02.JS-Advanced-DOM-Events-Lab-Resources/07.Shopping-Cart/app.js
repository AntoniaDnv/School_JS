function solve() {
let addBtn = document.querySelectorAll('.add-product');
let textarea = document.querySelector('textarea');
let checkout = document.querySelector('checkout');
let result = [];
addBtn.forEach(btn =>{
    btn.addEventListener('click', (ev) => {
        let div = ev.target.parentElement.parentElement;
        let productName = div.querySelector('.product-title');
        let price = div.querySelector('.product-line-price');
        let match = result.find(str => str.startsWith(`Added ${productName}`))
        if(!match){
            result.push(`Added ${productName} for ${price} to the  `)
        }
    })
})
}