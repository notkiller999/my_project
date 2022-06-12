import { getResource } from "../../services/services";

const createCards = () => {
    localStorage.clear();
    try {
        const wrapper = document.querySelector('.card-wrapper');
    
        getResource('http://localhost:3000/products').then(res => {
            res.forEach(item => {
                for (let key in item) {
                    const product = item[key][item[key]["id"]];
                    let photo = 'https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg';
                    let i = 0;
                    let currrency;

                    if (product[i].photo === null) {
                        while (s <= product.length) {
                            i++
                            if (product[i].photo) {
                                break
                            }
                        }                                            
                    }

                    if (i < product.length) {
                        photo = product[i].photo.split(';')[0]
                    }
                
                    const card = document.createElement('div');
                    card.setAttribute('data-article', item[key].id);
                    card.classList.add('card', 'card-active');

                    if (product[0].currency == 'UAH') {
                        currrency = 'грн'
                    } else {
                        currrency = 'дол'
                    }

                    card.innerHTML = `
                        <a href="product.html">
                            <div class="card-img">
                                <img class="card-main-img" src="${photo}" alt="">
                            </div>
                        </a>
                        <a href="#" class="card-link">
                            <div class="card-title">${product[0].product_name}</div>
                        </a>
                        <div class="card-price d-flex">
                            <div class="price">${product[0].price.split('.')[0]}</div>
                            <div class="currency">${currrency}</div>
                        </div>
                    `;
                    try {
                        wrapper.appendChild(card);
                    } catch (e) { }
                }
            })
        });
        } catch (e) {}
}

export default createCards;
