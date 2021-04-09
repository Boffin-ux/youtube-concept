const swiper = new Swiper('.channel-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 6,

    // Navigation arrows
    navigation: {
        nextEl: '.channel-button-next',
        prevEl: '.channel-button-prev',
    },
});

const swiperRecommended = new Swiper('.recommended-channel-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,

    // Navigation arrows
    navigation: {
        nextEl: '.recommended-channel-button-next',
        prevEl: '.recommended-channel-button-prev',
    },
});

const swiperRecommendation = new Swiper('.recommendation-channel-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 6,

    // Navigation arrows
    navigation: {
        nextEl: '.recommendation-channel-button-next',
        prevEl: '.recommendation-channel-button-prev',
    },
});