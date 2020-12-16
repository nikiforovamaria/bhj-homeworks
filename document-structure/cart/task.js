const cartProducts = document.querySelector('.cart__products');
const product = document.querySelectorAll('.product');
const controls = document.querySelectorAll('.product__quantity-control');
const buttonAdd = document.querySelectorAll('.product__add');

for (let item of controls) {
    item.addEventListener('click', () => {
        let value = item.closest('.product__quantity-controls').querySelector('.product__quantity-value');
        if (item.classList.contains('product__quantity-control_dec')) {
            value.textContent--;
            if (value.textContent < 1) {
                value.textContent = 1;
            }
        } else if (item.classList.contains('product__quantity-control_inc')) {
            value.textContent++;
        }
    })
}

for (let item of buttonAdd) {
    item.addEventListener('click', () => {
        const id = item.closest('.product').dataset.id;
        const count = Number(item.closest('.product').querySelector('.product__quantity-value').textContent);
        const img = item.closest('.product').querySelector('img').getAttribute('src');
        
        if (cartProducts.querySelector(`[data-id = '${id}']`)) {
            const num = Number(cartProducts.querySelector(`[data-id = '${id}']`).querySelector('.cart__product-count').textContent);
            cartProducts.querySelector(`[data-id = '${id}']`).querySelector('.cart__product-count').textContent = num + count;
        } else {
            cartProducts.insertAdjacentHTML('beforeend', `<div class="cart__product" data-id="${id}">
                <img class="cart__product-image" src="${img}">
                <div class="cart__product-count">${count}</div>
                </div>`);
        }
    });
}