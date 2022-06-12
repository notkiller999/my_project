const modalActions = (name, size, color, price, img, basketState) => {
    const modal = document.querySelector('#buy_modal'),
        cartBody = modal.querySelector('.cart-items');
      
    const cart = document.createElement('tr');
    cart.classList.add('cart-item');
    cart.innerHTML = `
            <td class="cart-item-img">
                <div class="cart-item-image">
                    <a class="cart-item-link" href="product.html">
                        <img src="${img}"
                            alt="">
                    </a>
                </div>
            </td>
            <td class="cart-item-info">
                <a class="cart-item-link" href="product.html">
                    <div class="cart-item-name">${name}</div>
                </a>
                <div class="cart-item-character">
                    <div class="cart-item-size">Размер: ${size}</div>
                    <div class="cart-item-color">Цвет: ${color}</div>
                </div>
                <div class="cart-item-price">${price} грн</div>
            </td>
            <td class="cart-item-count">
                <div class="cart-item-counter">
                    <button class="counter-minus counter-btn btn btn-outline-dark">&ndash;</button>
                    <input type="text" class="counter-input" type="text" value="1" aria-valuemin="1">
                    <button class="counter-plus counter-btn btn btn-outline-dark">+</button>
                </div>
            </td>
            <td class="cart-item-total">
                <div class="cart-item-total-price">${price} грн</div>
            </td>
            <td class="cart-item-delete">
                <div class="cart-item-delete-trigger">&times;</div>
            </td>
        `;

    cartBody.appendChild(cart);
    cart.addEventListener('click', (e) => {
        const target = e.target,
            input = cart.querySelector('.counter-input'),
            value = +input.value,
            minus = cart.querySelector('.counter-minus'),
            plus = cart.querySelector('.counter-plus'),
            cartPrice = cart.querySelector('.cart-item-total-price');
        
        if (target === minus && value > 1) {
            input.value = value - 1;
            cartPrice.textContent = `${+input.value * price} грн`;
            calcTotalPrice();
        }

        if (target === plus && value < 100) {
            input.value = value + 1;
            cartPrice.textContent = `${+input.value * price} грн`;
            calcTotalPrice();
        }
    })

    function calcTotalPrice() {
        const cartTotal = modal.querySelectorAll('.cart-item-total-price'),
            total = modal.querySelector('.cart-footer-total-count');
        let totalCounter = 0;
        
        cartTotal.forEach(item => {
            const price = +item.textContent.replace(/\D/g, '');
            totalCounter += price;
        })

        total.textContent = `${totalCounter} грн`;
    }
    calcTotalPrice();

    const cartDelet = cart.querySelector('.cart-item-delete-trigger');

    cart.addEventListener('mouseover', () => {
        cartDelet.style.display = 'block';
    });

    cart.addEventListener('mouseleave', () => {
        cartDelet.style.display = 'none';
    })

    cartDelet.addEventListener('click', () => {
        cart.remove();
        calcTotalPrice();
        basketState.forEach((item, i) => {
            if (item.name === name && item.size === size && item.color === color) {
                basketState.splice(i, 1);
            }
        })
    })

}

export default modalActions;