import {
    displayControlMessengersBtns,
    displayControlScrollUpBtn,
    scrollToElement,
    scrollToPosition,
    squeezeHeader
} from './utils.js';


$('.projects-slider').slick({
    dots: true
});



window.addEventListener('scroll', () => {
    squeezeHeader(window.pageYOffset);
    displayControlScrollUpBtn(window.pageYOffset);
});



const mobileMenuLabels = document.querySelectorAll('.mobile-menu__label');
mobileMenuLabels.forEach(menuLabel => {
    menuLabel.addEventListener('click', () => {
        const menuSubList = menuLabel.nextElementSibling;
        menuSubList.classList.toggle('mobile-menu__sublist_show');
    });
});



const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuCloseBtn = document.querySelector('.mobile-menu__close-btn');
mobileMenuCloseBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile-menu_open');
});
const mobileMenuOpenBtn = document.querySelector('.mobile-menu-btn');
mobileMenuOpenBtn.addEventListener('click', () => {
    mobileMenu.classList.add('mobile-menu_open');
});



const mainPageScrollDownBtn = document.querySelector('.main-section__btn');
mainPageScrollDownBtn.addEventListener('click', () => {
    const target = document.querySelectorAll('.page-section');
    scrollToElement(target[0]);
});



const scrollUpBtn = document.querySelector('.button_scroll-up');
scrollUpBtn.addEventListener('click', () => scrollToPosition(10));



const selectorsFeedbackBtns = [
    'header__action-btn',
    'main-section__btn-feedback',
    'footer__action_btn'
];
const wrpFeedbackForm = document.querySelector('.section-feedback-form');
selectorsFeedbackBtns.forEach(selectorBtn => {
    document.querySelector(`.${selectorBtn}`).addEventListener('click', () => {
        scrollToElement(wrpFeedbackForm);
    })
});



const messengersBtn = document.querySelector('.button_messengers');
messengersBtn.addEventListener('click', displayControlMessengersBtns);



const messengersCloseBtn = document.querySelector('.button_messengers-close');
messengersCloseBtn.addEventListener('click', () => displayControlMessengersBtns());