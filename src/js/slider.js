new Swiper('.swiper-container', {
    spaceBetween: 300,
    // effect: 'fade',
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    pagination: {
        clickable: true,
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
});