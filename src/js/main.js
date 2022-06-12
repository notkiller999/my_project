import './lib';
import miniSlider from './modules/miniSlider';
import createCards from './modules/cards/createCards';
import activateCards from './modules/cards/activateCards';

window.addEventListener('DOMContentLoaded', () => {
    'use strict'

    const basketState = [];


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
        activateCards('.card-wrapper', basketState);
    } catch (e) { }
    
    try {
        activateCards('.product-slider', basketState)
    } catch(e) {}
       
    
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
        tabHeaderSelector: '.product-tab-panel', 
        tabContentSelector: '.product-tab-wrapper',
        tabHederActiveClass: 'product-tab-item--active',
        tabContentActiveClass: 'product-tab-content--active'
    });
       
    createCards();

});