import {
    displayControlMessengersBtns,
    displayControlScrollUpBtn,
    scrollToElement,
    scrollToPosition,
    squeezeHeader
} from './utils.js';


$('.projects-slider').slick({
    dots: true,
    adaptiveHeight: true
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



const mobileFooterMenuLabels = document.querySelectorAll('.footer__nav-title');
mobileFooterMenuLabels.forEach(menuLabel => {
    menuLabel.addEventListener('click', () => {
        menuLabel.closest('.footer__nav-block').classList.toggle('footer__nav-block_active');
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
mainPageScrollDownBtn?.addEventListener('click', () => {
    const target = document.querySelectorAll('.page-section');
    scrollToElement(target[0]);
});



const scrollUpBtn = document.querySelector('.button_scroll-up');
scrollUpBtn?.addEventListener('click', () => scrollToPosition(10));



const selectorsFeedbackBtns = [
    'header__action-btn',
    'main-section__btn-feedback',
    'footer__action_btn'
];
const wrpFeedbackForm = document.querySelector('.section-feedback-form');
selectorsFeedbackBtns.forEach(selectorBtn => {
    document.querySelector(`.${selectorBtn}`)?.addEventListener('click', () => {
        scrollToElement(wrpFeedbackForm);
    })
});



const messengersBtn = document.querySelector('.button_messengers');
messengersBtn?.addEventListener('click', displayControlMessengersBtns);



const messengersCloseBtn = document.querySelector('.button_messengers-close');
messengersCloseBtn?.addEventListener('click', () => displayControlMessengersBtns());



/* Работа скролл-бара */
scrollProgressBar();
function scrollProgressBar() {
    $(window).scroll(function () {
        var ratio = $(document).scrollTop () / (($(document).height () - $(window).height ()) / 100);
        $(".progress-bar").width (ratio + "%");
    });
}



/* Блок "Отзывы" - работа модального окна "Информация о проекте" */
const aboutProjectBtns = document.querySelectorAll('.project-item__about-btn');
aboutProjectBtns.forEach(btn => {
    btn?.addEventListener('click', () => {
        const modalNode = document.querySelector('#modalAboutProject');
        const projectDescItems = btn.closest('.project-item').querySelectorAll('.project-item__desc [data-project-info-item]');
        projectDescItems.forEach(item => {
            modalNode.querySelector(`[data-project-info-item="${item.dataset.projectInfoItem}"]`).textContent = item.textContent;
        });

        const modalAboutProject = new bootstrap.Modal(modalNode);
        modalAboutProject.show();
    });
});



/* Просмотр полного изображения отзыва клиента */
const fullReviewBtns = document.querySelectorAll('.project-item__full-review-image');
fullReviewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const imageURL = btn.dataset.href;
        const modalNode = document.querySelector(`#modalFullReviewImage`);
        const imageNode = modalNode.querySelector('.fullReviewImage');

        imageNode.setAttribute('src', imageURL);
        const modalFullReviewImage = new bootstrap.Modal(modalNode);
        modalFullReviewImage.show();
    });
})



/* Изменения в отображении интерфейса при изменении ширины экрана */
document.addEventListener('DOMContentLoaded', () => changeClassCellService());
window.addEventListener('resize', () => changeClassCellService());

function changeClassCellService() {
    const cellsService = document.querySelectorAll('.cell-service.simple-block');
    if (document.documentElement.clientWidth < 768) {
        cellsService.forEach((element, index) => {
            index % 2 === 0 
                ? element.classList.add('simple-block_inverse')
                : element.classList.remove('simple-block_inverse');
        });
    } else {
        const searchIndexes = Array.from(cellsService).map((el, index) => 1 + 3 * ((index + 1) - 1));
        cellsService.forEach((element, index) => {
            searchIndexes.includes(index + 1)
                ? element.classList.add('simple-block_inverse')
                : element.classList.remove('simple-block_inverse');
        });
    }
}


