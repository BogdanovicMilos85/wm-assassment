 var swiper = new Swiper('.swiper-container', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  slidesPerView: 'auto',
  paginationClickable: true,
  spaceBetween: 0,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});