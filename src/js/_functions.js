import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const expertsSlide = new Swiper('.experts__slider-container', {
    spaceBetween: 20,
    navigation: {
        nextEl: '.experts__button-next',
        prevEl: '.experts__button-prev',
    },
    pagination: {
        el: '.experts__swiper-pagination',
        clickable: true,
    },
    loop: true,
    loopedSlides: 5,
    breakpoints: {
        1600: {
            slidesPerView: 3,
        },
        1280: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 1,
        },
    },
});

const reviewFirstSlide = new Swiper('.review__slider-container-first', {
    spaceBetween: 20,
    navigation: {
        nextEl: '.review__button-next-first',
        prevEl: '.review__button-prev-first',
    },
    pagination: {
        el: '.review__swiper-pagination-first',
        clickable: true,
    },
    loop: true,
    breakpoints: {
        1600: {
            slidesPerView: 3,
        },
        1280: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        360: {
            slidesPerView: 1,
        },
    },
});

const reviewSecondSlide = new Swiper('.review__slider-container-second', {
    spaceBetween: 20,
    navigation: {
        nextEl: '.review__button-next-second',
        prevEl: '.review__button-prev-second',
    },
    pagination: {
        el: '.review__swiper-pagination-second',
        clickable: true,
    },
    loop: true,
    breakpoints: {
        1600: {
            slidesPerView: 3,
        },
        1280: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        360: {
            slidesPerView: 1,
        },
    },
});

const reviewThirdSlide = new Swiper('.review__slider-container-third', {
    spaceBetween: 20,
    navigation: {
        nextEl: '.review__button-next-third',
        prevEl: '.review__button-prev-third',
    },
    pagination: {
        el: '.review__swiper-pagination-third',
        clickable: true,
    },
    loop: true,
    breakpoints: {
        1600: {
            slidesPerView: 3,
        },
        1280: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        360: {
            slidesPerView: 1,
        },
    },
});

const vetSlide = new Swiper('.vet__slider-container', {
    spaceBetween: 20,
    pagination: {
        el: '.vet__swiper-pagination',
        clickable: true,
    },
    slidesPerView: 1,
    breakpoints: {
        1600: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
    },
});

const industrySlide = new Swiper('.industry__slider-container', {
    spaceBetween: 20,
    navigation: {
        nextEl: '.industry__button-next',
        prevEl: '.industry__button-prev',
    },
    pagination: {
        el: '.industry__swiper-pagination',
        clickable: true,
    },
    slidesPerView: 3,
    breakpoints: {
        1600: {
            slidesPerView: 3,
        },
        1280: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        360: {
            slidesPerView: 1,
        },
    },
});
