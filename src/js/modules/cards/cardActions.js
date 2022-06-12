import { getResource } from "../../services/services";
import modalActions from "../modalActions";
import changeBasketState from "../changeBasketState";

const cardActions = (card, basketState) => {
    if ($(card).find('.card-item-active').length !=0) {
        const color = card.querySelector('.item-color-panel');
        const size = card.querySelector('.item-size-panel');
        size.addEventListener('click', (e) => {
            const target = e.target;
            if (target.getAttribute('data-size')) {
                $(target).addClass('item-size-block-active').sibbling().removeClass('item-size-block-active');
                localStorage.setItem(card.getAttribute('data-article'), target.getAttribute('data-size'));
            }
        })
        color.addEventListener('click', (e) => { 
            const target = e.target;
            if (target.getAttribute('data-color')) {
                $(target).addClass('item-color-img-active').sibbling().removeClass('item-color-img-active');
                getResource('http://localhost:3000/products').then(res => {
                        let product;
                        res.forEach(item => {
                            for (let key in item) {
                                let id = card.getAttribute('data-article');
                                if (item[key][id] != undefined) {
                                    product = item[key][id];
                                }
                            }
                        })
                        return product;
                    }).then(product => {
                        let sizes = [];
                        product.forEach(item => {
                            if (item.color === target.getAttribute('data-color')) {
                                sizes.push(item.size);
                                if (item.photo != null) {
                                    card.querySelector('.card-img > img').setAttribute('src', item.photo.split(';')[0]);
                                }
                            }
                        })
                        size.innerHTML = '';
                        sizes.sort((a, b) => a - b)
                        sizes.forEach(item => {
                            const sizeBlock = document.createElement('div');
                            sizeBlock.classList.add('item-size-block');
                            sizeBlock.setAttribute('data-size', item);
                            sizeBlock.textContent = item;
                            size.appendChild(sizeBlock)
                        })
                        return size;
                    }).then(size => {
                        const sizeBloks = size.querySelectorAll('.item-size-block');
                        let active;
                        sizeBloks.forEach(item => {
                            if (item.getAttribute('data-size') === localStorage.getItem(card.getAttribute('data-article'))) {
                                active = item;
                            }
                        })
                        if (active) {
                            active.classList.add('item-size-block-active');
                        } else {
                            sizeBloks[0].classList.add('item-size-block-active');
                        }
                    })
            }
        })
    }
    $(card.querySelector('[data-target="#buy_modal"]')).click((e) => {
        const name = $(e.target).closest('.card').find('.card-title').html(),
            size = $(e.target).closest('.card').find('.item-size-block-active')[0].getAttribute('data-size'),
            color = $(e.target).closest('.card').find('.item-color-img-active')[0].getAttribute('data-color'),
            price = $(e.target).closest('.card').find('.price').html(),
            img = $(e.target).closest('.card').find('.card-main-img')[0].getAttribute('src');
        
        if (basketState.length === 0) {
            modalActions(name, size, color, price, img, basketState);
            changeBasketState(name, size, color, price, basketState);
        }
        
        

        function checkBasket() {
            let checker = true;
            basketState.forEach(item => {
                if (item.name === name && item.size === size && item.color === color) {
                    checker = false
                }
            });

            if (checker) {
                modalActions(name, size, color, price, img, basketState);
                changeBasketState(name, size, color, price, basketState);
                
            }
        }
        checkBasket();
        

    });
    $(card.querySelector('[data-target="#buy_modal"]')).modal();
}
export default cardActions;