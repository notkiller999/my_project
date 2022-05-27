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
        const tabItems = document.querySelectorAll('.card-slider-block .tab-item'),
            tabContent = document.querySelectorAll('.card-slider-block .tab-content'),
            activeTab = document.querySelector('.card-slider-block .tab-item--active');

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
                prev: '[data-slider="prev"]',
                numberOfSlides: 3
            })
        }

        slider();
    } catch(e){}
    

    try {
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
    } catch (e) { }
    
    try {
        miniSlider({
            container: '.more-products-slider',
            sliderInner: '.more-products-slider-inner',
            sliderItems: '.more-products-slider-item',
            sliderWrapper: '.more-products-slider-wrapper',
            next: '.more-products-slider [data-slider="next"]',
            prev: '.more-products-slider [data-slider="prev"]',
            numberOfSlides: 7
        })
    } catch (e) { }
    
    $('.product-tab').tab({
        tabHeaderSelector: '.product-tab-panel', // селектор обертки табов
        tabContentSelector: '.product-tab-wrapper', // селектор обертки контента
        tabHederActiveClass: 'product-tab-item--active', // класс активности табов
        tabContentActiveClass: 'product-tab-content--active' // класс активности контента
    });

});