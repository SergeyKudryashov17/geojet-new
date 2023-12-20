export function scrollToElement(scrollTarget) {
    const topOffset = document.querySelector('.header').offsetHeight;
    // const topOffset = 0; // если не нужен отступ сверху
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

export function scrollToPosition(topPosition) {
    window.scrollTo({
        top: topPosition,
        behavior: 'smooth'
    });
}

export function squeezeHeader(windowScrollPosition) {
    const headerTopBlock = document.querySelector('.header__top');
    headerTopBlock.classList.toggle('header__top_slim', windowScrollPosition !== 0);
}

export function displayControlScrollUpBtn(windowScrollPosition) {
    const scrollTopBtn = document.querySelector('.button_scroll-up');
    scrollTopBtn.classList.toggle('d-none', windowScrollPosition === 0);
}

export function displayControlMessengersBtns() {
    console.log('1');
    const messengersBtn = document.querySelector('.button_messengers');
    messengersBtn.classList.toggle('button_messengers_active');

    const btnSelectors = [
        'button_messengers-close',
        'button_telegramm',
        'button_whatsapp'
    ];

    const flagToggle = messengersBtn.classList.contains('button_messengers_active');
    console.log(flagToggle);
    btnSelectors.forEach(selector => {
        document.querySelector(`.${selector}`).classList.toggle(`${selector}_open`, flagToggle);
    });
}