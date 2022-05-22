import './lib';
import miniSlider from './miniSlider';

window.addEventListener('DOMContentLoaded', () => {
    try {
        $('.main-slider').slider({
            sliderInner: '.main-slider-inner',
            sliderItems: '.main-slider-item',
            sliderWrapper: '.main-slider-wrapper',
            addDots: true,
            indicate: true,
            autoSlide: 6,
            stopAnimation: false
        });
    } catch (e) {}

    try {
        const tabItems = document.querySelectorAll('.tab-item'),
            tabContent = document.querySelectorAll('.tab-content'),
            activeTab = document.querySelector('.tab-item--active');

        tabItems.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target != activeTab) {
                    tabContent.forEach(tab => {
                        if (tab.classList.contains('tab-content--active')) {
                            setTimeout(slider, 0);
                        }
                    })
                }

            }, {
                once: true
            })
        })

        function slider() {
            miniSlider({
                container: '.tab-content--active',
                sliderInner: '.product-slider-inner',
                sliderItems: '.product-slider-item',
                sliderWrapper: '.product-slider-wrapper',
                next: '[data-slider="next"]',
                prev: '[data-slider="prev"]'
            })
        }

        slider();
    } catch(e) {}

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            // console.log(card);
            card.querySelector(`.card-item-active`).style.display = 'block';
        })
        card.addEventListener('mouseleave', () => {
            card.querySelector(`.card-item-active`).style.display = 'none';
        })
    })

    
    

});