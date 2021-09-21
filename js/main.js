$(function(){

    $(".reting, .raview__star").rateYo({
        rating: 5,
        starWidth: "20px",
        ratedFill: "#B48D62"
    });
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<svg class="arrows-btn arrows-left" width="50" height="25" viewBox="0 0 50 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M1.21948 12.5H50" stroke="#212806"/><path d="M11.3817 25C11.3817 18.75 1.21912 15.625 1.21912 12.5C1.21912 9.375 11.3817 7.29166 11.3817 0" stroke="#212806"/></g><defs><clipPath id="clip0"><rect width="50" height="25" fill="white"/></clipPath></defs></svg>',
        nextArrow: '<svg class="arrows-btn arrows-right" width="50" height="25" viewBox="0 0 50 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M48.7805 12.5H0" stroke="#212806"/><path d="M38.6183 0C38.6183 6.25 48.7808 9.375 48.7808 12.5C48.7808 15.625 38.6183 17.7084 38.6183 25" stroke="#212806"/></svg>',
        responsive: [
          {
            breakpoint: 1561,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
              {
                breakpoint: 930,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 640,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
        ]
    });
    $('.raview__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });
    $('.menu-btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active')
    });
});