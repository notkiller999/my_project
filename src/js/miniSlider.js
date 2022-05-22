const miniSlider = ({
    sliderInner,
    sliderItems,
    sliderWrapper,
    next,
    prev,
    container}) => {

    const parent = document.querySelector(container),
        slideInner = parent.querySelector(sliderInner),
        slides = parent.querySelectorAll(sliderItems),
        sliderWrapp = parent.querySelector(sliderWrapper),
        nextBtn = parent.querySelector(next),
        prevBtn = parent.querySelector(prev),
        width = window.getComputedStyle(slideInner).width.replace(/\D/g, '') / 3;
    console.log(width);

    let offset = 0;
    
    slides.forEach(slide => {
        slide.style.width = width + 'px';
        slide.firstElementChild.style.cssText = `
        width: 100%;
        height: 100%;
        `;
    })
    sliderWrapp.style.width = (100 * slides.length) / 3 + '%';
    
    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (offset < (slides.length - 3) * width) {
            if (offset < (slides.length - 4) * width) {
                offset += width * 2;
            } else {
                offset += width;
            }
            sliderWrapp.style.transform = `translateX(-${offset}px)`;
        }
        console.log(offset, ((slides.length -3) * width));
    })

    prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (offset > 0) {
            if (offset >= width * 2) {
                offset -= width * 2;
            } else {
                offset -= width;
            }
            sliderWrapp.style.transform = `translateX(-${offset}px)`;
        }
    })
}

export default miniSlider;