import hamburgerMenu from "./components/hamburger";
import fixedHeader from "./components/fixed-header";
import dropdownMenu from "./components/dropdown-menu";
import calculator from "./components/calculator";
import tabs from "./components/tab";
import dropdown from "./components/dropdown";
import tabDropdown from "./components/tab-dropdown";
import tabsPlusButton from "./components/tab-plus-button";
import rating from "./components/rating";
import form from "./components/form";

document.addEventListener('DOMContentLoaded', () => {
    hamburgerMenu();
    fixedHeader();
    dropdownMenu();
    
    dropdown('.footer__dropdown', '.footer__title-drop', '.footer__dropdown-wrap');

    if (document.body.classList.contains('is-home-page')) {
        calculator();
        tabs('.js-tab-link', '.js-tab-content', '.calculator__wrapper');
    }

    if (document.body.classList.contains('is-home-page') || document.body.classList.contains('is-seo-page')) {
        dropdown('.faq__wrapper', '.faq__question', '.faq__answer');
        tabs('.review__tab', '.review__content', '.review__wrapper');
        tabsPlusButton('.order__tab', '.order__content', '.order__wrapper', '.js-next-tab');
    }

    if (document.body.classList.contains('is-price-page')) {
        tabDropdown('.price__tab', '.price__content', '.price__tabs');
        tabs('.review__tab', '.review__content', '.review__wrapper');
        dropdown('.faq__wrapper', '.faq__question', '.faq__answer');
    }

    if (document.body.classList.contains('is-work-page')) {
        dropdown('.unfold__wrap', '.unfold__question', '.unfold__answer', true);
        dropdown('.faq__wrapper', '.faq__question', '.faq__answer');
    }

    if (document.body.classList.contains('is-review-page')) {
        tabs('.review__tab', '.review__content', '.review__wrapper');
        rating();
        form();
    }

    if (document.body.classList.contains('is-about-page')) {
        tabs('.review__tab', '.review__content', '.review__wrapper');
    }
});
