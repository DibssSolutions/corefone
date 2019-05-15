import slick from 'slick-carousel';

const slider = $('.js-slider');
slider.slick({
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<button class="slider__prev"><svg width="34" height="60" viewBox="0 0 34 60" xmlns="http://www.w3.org/2000/svg"><title>arrow</title><g fill="#505D68" fill-rule="nonzero"><path d="M33.79 56.133L29.97 60 1.613 31.256l3.82-3.867z"/><path d="M33.782 3.828L3.999 34 .362 30.316 30.145.144z"/></g></svg></button>',
  nextArrow: '<button class="slider__next"><svg width="34" height="60" viewBox="0 0 34 60" xmlns="http://www.w3.org/2000/svg"><title>arrow</title><g fill="#505D68" fill-rule="nonzero"><path d="M.21 3.867L4.03 0l28.357 28.744-3.82 3.867z"/><path d="M.218 56.172L30.001 26l3.637 3.684L3.855 59.856z"/></g></svg></button>'
});

const clientsSlider = $('.js-clients-slider');
clientsSlider.slick({
  dots: false,
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 600,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true
      }
    }
  ]
});
