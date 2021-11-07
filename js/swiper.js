const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 1.5,
  speed: 1000,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 50,
    },
    1200: {
      slidesPerView: 4,
    },
    1920: {
      slidesPerView: 5.5,
    }
  },
  autoplay: {
    number: 5000,
    disableOnInteraction: false,
  }
});
