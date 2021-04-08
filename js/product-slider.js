const slider = $(".products").bxSlider({
  pager: false,
  controls: false,
});

$(".products-slider__arrow--prev").click(e => {
  e.preventDefault();
  slider.goToPrevSlide();
});

$(".products-slider__arrow--next").click(e => {
  e.preventDefault();
  slider.goToNextSlide();
});