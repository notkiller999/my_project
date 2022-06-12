import { getResource } from "../../services/services";
import cardActions from "./cardActions";

const activateCards = (wrapper, basketState) => {

    try {
        const parent = document.querySelector(wrapper);
        parent.addEventListener('mouseover', (e) => {
            const target = e.target;
            let targetCard = $(target.closest('.card'))[0];

            if ($(target).closest('.card') && target != parent) {

                if ($(targetCard).find(`.card-item-active`).length != 0 && targetCard != undefined) {
                    targetCard.querySelector(`.card-item-active`).style.display = 'block';
                    targetCard.addEventListener('mouseleave', () => {
                        try {
                            targetCard.querySelector(`.card-item-active`).style.display = 'none';
                        } catch (e) { }
                    })
                } else {
                    const cardActive = document.createElement('div');
                    cardActive.classList.add('card-item-active');
                    cardActive.innerHTML = `
                    <div class="item-color">
                        <div class="item-color-title">Цвет</div>
                        <div class="item-color-panel"></div>
                    </div>
                    <div class="item-size">
                        <div class="item-size-title">Размер</div>
                        <div class="item-size-panel"></div>
                    </div>
                    <div data-target="#buy_modal" class="btn btn-dark item-btn">Купить</div>
                    <div data-target="#buy_modal" class="btn btn-dark item-btn-basket">Купить</div>
                    <div class="item-favorite">
                        <div class="item-favorite-ico">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path
                                    d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
                            </svg>
                            <svg style="display: none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path
                                    d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
                            </svg>
                        </div>
                        <div class="item-favorite-text">В желания</div>
                    </div>
                `;

                    cardActive.style.display = 'none';

                    getResource('http://localhost:3000/products')
                        .then(res => res.forEach(item => {
                            let product;
                            let color = null;

                            for (let key in item) {
                                const id = targetCard.getAttribute('data-article');
                                if (item[key][id] != undefined) {
                                    product = item[key][id];
                                }
                            }

                            let colorState = [];
                            let sizeState = [];

                            product.forEach(item => {
                                let checker = true
                                colorState.forEach(i => {
                                    if (i === item.color) {
                                        checker = false;
                                    }
                                })
                                if (item.color != color) {
                                    color = item.color;
                                    colorState.push(color);

                                    const imgBlock = document.createElement('div');
                                    const img = document.createElement('img');

                                    imgBlock.classList.add('item-color-img');
                                    if (item === product[0]) {
                                        imgBlock.classList.add('item-color-img-active')
                                    }

                                    if (item.photo != null) {
                                        img.setAttribute('src', item.photo.split(';')[0]);
                                    } else {
                                        product.forEach(i => {
                                            if (i.color === color && i.photo != null) {
                                                img.setAttribute('src', i.photo.split(';')[0]);
                                            }
                                        })
                                    }

                                    img.setAttribute('alt', item.product_modification_name);
                                    imgBlock.setAttribute('data-color', color);
                                    imgBlock.appendChild(img);

                                    if (checker) {
                                        cardActive.querySelector('.item-color-panel').appendChild(imgBlock);
                                    }

                                }

                                if (product[0].color === color) {
                                    sizeState.push(item.size);
                                }
                            })
                        
                            sizeState.sort((a, b) => a - b);
                            sizeState.forEach(size => {
                                const sizeBlock = document.createElement('div');
                                sizeBlock.classList.add('item-size-block');
                                sizeBlock.setAttribute('data-size', size);
                                sizeBlock.textContent = size;
                                if (product[0].size === size) {
                                    sizeBlock.classList.add('item-size-block-active');
                                }
                                cardActive.querySelector('.item-size-panel').appendChild(sizeBlock);
                            })
                        })).finally(() => {
                            cardActions(targetCard, basketState);
                        })
                    targetCard.appendChild(cardActive);
                    cardActive.style.display = 'block'
                }

            }
        })
    } catch(e) {}

}

export default activateCards;