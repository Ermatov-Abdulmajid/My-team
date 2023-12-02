const elbutton = document.querySelector('.site-header__button');
const elbutton2 = document.querySelector('.site-header__close-button');
const elsiteHeader = document.querySelector('.site-header');

if (elbutton) {
    elbutton.addEventListener('click' , function () {
        elsiteHeader.classList.add('site-header--open');
    });
}

elbutton2.addEventListener('click' , function () {
    elsiteHeader.classList.remove('site-header--open');
});


const eldirectorsPlus = document.querySelectorAll('.directors__item-plus');
const eldirectorsClose = document.querySelectorAll('.directors__info-close');
const elinfo = document.querySelector('.directors-info');
const eldirectorsItem = document.querySelector('.directors__item-wrapper');


eldirectorsPlus.forEach(function (eldirectorsPlus) {
    eldirectorsPlus.addEventListener('click' , function () {
        elinfo.classList.toggle('directors__item-info');
        if (elinfo) {
            eldirectorsItem.classList.add('directors__item-wrapper-open');
        };
        if (elinfo) {
            eldirectorsClose.classList.add('directors__item-plus--not');
        };      
    });
});

eldirectorsClose.forEach(function (eldirectorsClose) {
    eldirectorsClose.addEventListener('click' , function () {
        elinfo.classList.toggle('directors__item-info');
        if (elinfo) {
            eldirectorsItem.classList.remove('directors__item-wrapper-open');
        };
        if (elinfo) {
            eldirectorsPlus.classList.remove('directors__item-plus--not');
        };      
    });
});

const elEmail = document.querySelector('.contact__input-email');
const elErrorMessage = document.querySelector('.contact__error');

elEmail.addEventListener('click' , function () {
    elErrorMessage.classList.add('contact__error--open');
});