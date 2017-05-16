$(document).ready(function(){
  $('.slider').slick({
    autoplay: true,
    dots: true,
    pauseOnDotsHover: true,
    autoplaySpeed: 2000,
      responsive: [
    {
      breakpoint: 2500,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 970,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });
});