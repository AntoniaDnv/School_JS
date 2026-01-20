function solve() {
    let addButtons = document.querySelectorAll('.add-product');
    let textarea = document.querySelector('textarea');
    let checkoutBtn = document.querySelector('.checkout');

    let products = [];
    let totalPrice = 0;

    addButtons.forEach(btn => {
        btn.addEventListener('click', (ev) => {
            let productDiv = ev.target.parentElement.parentElement;

            let name = productDiv.querySelector('.product-title').textContent;
            let price = Number(productDiv.querySelector('.product-line-price').textContent);

            products.push(name);
            totalPrice += price;

            textarea.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
        });
    });

    checkoutBtn.addEventListener('click', () => {
        let uniqueProducts = [...new Set(products)];

        textarea.value += `You bought ${uniqueProducts.join(', ')} for ${totalPrice.toFixed(2)}.`;

        addButtons.forEach(btn => btn.disabled = true);
        checkoutBtn.disabled = true;
    });
}
