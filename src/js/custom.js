$(function() {
    var mainslider = $(".mainslider");
    mainslider.slick({
        dots: false,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // speed: '3000',
        autoplay: true,
        asNavFor: '.previewer',
        infinite: true
    });
    $('.mainslider-button.slick__next').on('click', function(){
        mainslider.slick('slickNext');
    });
    $('.mainslider-button.slick__prev').on('click', function(){
        mainslider.slick('slickPrev');
    });
    var previewer = $(".previewer");
    var previewer_length = $(".previewer__item").length;
    previewer.slick({
      asNavFor: '.mainslider',
      slidesToShow: previewer_length,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      centerPadding: '0px',
      focusOnSelect: true,
      adaptiveHeight: true,
      infinite: true
    });



    var eventslider = $(".eventslider");
    eventslider.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      centerPadding: '0px',
      // centerMode: true,
      focusOnSelect: true,
      adaptiveHeight: true,
      infinite: true,
      responsive: [  
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 2,
            arrows: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            arrows: false
          }
        }
      ]
    });

    $('.logos').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
          centerPadding: '0px',
          centerMode: true,
          focusOnSelect: true,
          adaptiveHeight: true,
          responsive: [   
            {
                breakpoint: 99999,
                settings: "unslick"
            },
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 1,
                arrows: true,
              }
            }
          ]
        });

    function setMarker(data, left=0, top=0) {
      $('.address__type').text('');
      $('.address__text').text('');
      $('.marker-info__phone').text('');
      $('.marker-info').css({"left":left+30, "top": top-100});
      if (data.type) {
        $('.address__type').text(data.type);
      }
      if (data.address) {
        $('.address__text').text(data.address);
      }
      if (data.phone) {
        $('.marker-info__phone').text(data.phone);
      }
      $('.marker-info').addClass('marker-info--active');
    }

    $('.marker').click(function(){
        if ($(this).hasClass('marker--active')){
          $('.marker--active').removeClass('marker--active');  
          $('.marker-info').removeClass('marker-info--active');
        }else{
          var info = $(this).data('info');
          position = $(this).position();
          setMarker(info, position.left, position.top);
          $('.marker--active').removeClass('marker--active');
          $(this).addClass('marker--active');
        }
        return false;
    });

    $('.map-info__marker_barnaul').trigger('click');

    $('.open-popup-link').magnificPopup({
      type:'inline',
      closeOnContentClick: false,
      zoom: {
        enabled: true,
        duration: 800,
        easing: 'ease-in-out'
      }
    });


});