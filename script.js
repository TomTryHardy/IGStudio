'use strict';

window.addEventListener('DOMContentLoaded', () => {


    //Slider


    const leftBtn = document.querySelector('.carousel__left'),
          rightBtn = document.querySelector('.carousel__right'),
          field = document.querySelector('.carousel__field'),
          hide = document.querySelectorAll('.carousel__hide'),
          mobileHide = document.querySelectorAll('.mobile__hide'),
          bodyWidth = document.body.offsetWidth,
          slides = document.querySelectorAll('.carousel__item');
    let slideIndex = 0,
        oneStep = slides[0].offsetWidth;

    // for(let i=0; i<slides.length; i++) {
    //     slides.forEach(slide => {
    //         if(!slide.classList.contains('carousel__active')) {

    //             slide.classList.add('carousel__hide')
    //         }
    //     })
    // }
    
    function validateButtons () {

        if (slideIndex < hide.length) {
            rightBtn.classList.remove('button__hide');
            rightBtn.classList.add('button__active');
        } 
        if (!slideIndex <= 0) {
            leftBtn.classList.remove('button__hide');
            leftBtn.classList.add('button__active');
        }

        if (bodyWidth < 575) {
            if (slideIndex < mobileHide.length) {
                rightBtn.classList.remove('button__hide');
                rightBtn.classList.add('button__active');
            } 
        }

    }

    function nextSlide () {
        rightBtn.addEventListener('click', () => {
            field.classList.add('transform');
            slideIndex++;

            if (slideIndex >= hide.length) {
                rightBtn.classList.remove('button__active');
                rightBtn.classList.add('button__hide');
                slideIndex = hide.length;
            } 

            if (bodyWidth < 575) {
                if (slideIndex >= mobileHide.length) {
                    rightBtn.classList.remove('button__active');
                    rightBtn.classList.add('button__hide');
                    slideIndex = mobileHide.length;
                } 
            }

            validateButtons();
            switchCards();
        })
    }
    nextSlide();

    function prevSlide () {
        leftBtn.addEventListener('click', () => {
            field.classList.add('transform');
            slideIndex--;
            if (slideIndex <= 0) {
                leftBtn.classList.remove('button__active');
                leftBtn.classList.add('button__hide');
                slideIndex = 0;
            }
            validateButtons();
            switchCards();
        })
    }
    prevSlide();
    
    function switchCards () {
        field.style.transform = `translateX(${(-oneStep - 30) * slideIndex}px)`;
    }
    
          







    //Аккордеон



    const block = document.querySelectorAll('.report__block'),
          description = document.querySelectorAll('.report__question-descr'),
          plus = document.querySelectorAll('.report__plus');

        function openAcco(active, hide) {
            block.forEach((item, i) => {
                item.addEventListener('click', () => {
                    if (description[i].classList.contains(hide)) {
                        description[i].classList.remove(hide);
                        description[i].classList.add(active);
                        plus[i].textContent = '-';

                    } else {
                        description[i].classList.remove(active);
                        description[i].classList.add(hide);
                        plus[i].textContent = '+';
                        
                    }

                })
            })
        }

        openAcco('accordion-active', 'accordion-hide');
})