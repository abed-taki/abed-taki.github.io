
$('.center').slick({
infinite: true,
centerMode: true,
variableWidth: true,
slidesToShow: 3,
//slidesToScroll: 3,
centerPadding: '60px',

nextArrow: $('.next-slide'),
prevArrow: $('.prev-slide'),
responsive: [
  {
    breakpoint: 768,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 3
    }
  },
  {
    breakpoint: 480,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 1
    }
  }
]
});
