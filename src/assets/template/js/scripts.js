$(function() {
    $('.nav-toggle').click(function(){
        $('body').toggleClass('has-nav-open');
    });
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

    var mainslider = $(".mainslider");
    mainslider.slick({
        dots: false,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        //speed: '3000',
        autoplay: true,
        asNavFor: '.previewer'
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

    
    var innerslider = $(".innerslider");
    innerslider.slick({
        dots: false,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // speed: '3000',
        autoplay: false
    });
    $('.innerslider-button.slick__next').on('click', function(){
        innerslider.slick('slickNext');
    });
    $('.innerslider-button.slick__prev').on('click', function(){
        innerslider.slick('slickPrev');
    });

    $(".fly-menu ul").niceScroll({
        "cursorcolor": "#cfcfcf",
        "cursoropacitymin": "0.2",
        "cursorborder": "2px solid transparent",
        "cursorwidth": 8
    });
    $(".aside-nav ul").niceScroll({
        "cursorcolor": "#cfcfcf",
        "cursoropacitymin": "0.2",
    });

    $('.carusel-content').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        focusOnSelect: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 376,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    dots: false,
                }
            }
        ]
    });

    $('.carusel-products-fly').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        focusOnSelect: true,
        adaptiveHeight: true,
        prevArrow: ' <button class="o-button -white- -square -left innerslider-button slick-prev slick-arrow" type="button"><span class="o-button_label"><svg class="o-button_icon" role="img"><use xlink:href="assets/pomerleau/images/sprite.svg#arrow-prev"/></svg></span></button>',
        nextArrow: ' <button class="o-button -white- -square -left innerslider-button slick-next slick-arrow" type="button"><span class="o-button_label"><svg class="o-button_icon" role="img"><use xlink:href="assets/pomerleau/images/sprite.svg#arrow-next"/></svg></span></button>',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    dots: false
                }
            }
        ]
    });
    $('.carusel-products').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        focusOnSelect: true,
        adaptiveHeight: true,
        prevArrow: ' <button class="o-button -white- -square -left innerslider-button slick-prev slick-arrow" type="button"><span class="o-button_label"><svg class="o-button_icon" role="img"><use xlink:href="assets/pomerleau/images/sprite.svg#arrow-prev"/></svg></span></button>',
        nextArrow: ' <button class="o-button -white- -square -left innerslider-button slick-next slick-arrow" type="button"><span class="o-button_label"><svg class="o-button_icon" role="img"><use xlink:href="assets/pomerleau/images/sprite.svg#arrow-next"/></svg></span></button>',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    arrows: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    dots: false
                }
            }
        ]
    });



    setAnimated();

    $('.open-popup-link').magnificPopup({
        type:'inline',
        closeOnContentClick: false,
        zoom: {
            enabled: true,
            duration: 800,
            easing: 'ease-in-out'
        }
    });

    $('.zoom').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            verticalFit: true
        }
    });

    $('.product-photos__main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.product-photos__preview'
    });
    $('.product-photos__preview').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product-photos__main',
        dots: false,
        arrows: false,
        centerPadding: '0px',
        centerMode: true,
        focusOnSelect: true,
        adaptiveHeight: true
    });

    $('.carusel-about').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        focusOnSelect: true,
        adaptiveHeight: true,
        prevArrow: ' <button class="o-button -white- -square -left innerslider-button slick-prev slick-arrow" type="button"><span class="o-button_label"><svg class="o-button_icon" role="img"><use xlink:href="assets/pomerleau/images/sprite.svg#arrow-prev"/></svg></span></button>',
        nextArrow: ' <button class="o-button -white- -square -left innerslider-button slick-next slick-arrow" type="button"><span class="o-button_label"><svg class="o-button_icon" role="img"><use xlink:href="assets/pomerleau/images/sprite.svg#arrow-next"/></svg></span></button>'
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

    $('.fly-menu__toggle').click(function(){
        $('.fly-menu__toggle').removeClass('open');
        $(this).addClass('open');
        return false;
    })

    $('.product-photos__main img').magnificPopup({
        //delegate: 'img', // the selector for gallery item
        type: 'image',
        gallery: {
            enabled:true,
            arrowMarkup2: '<button rel="111" title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            arrowMarkup: '<button class="o-button -white -square mfp-arrow-%dir% mfp-arrow-new" type="button">\n' +
            '                <span class="o-button_label">\n' +
            '                   <svg class="o-button_icon" role="img"><use xlink:href="assets/pomerleau/images/sprite.svg#arrow-%dir%"/></svg>\n' +
            '                </span>\n' +
            '             </button>'
        },
        mainClass: 'product-popup',
        closeBtnInside: true,
        callbacks: {
            open: function() {
                var arrows = $('.product-popup .mfp-arrow-new').detach();
                arrows.appendTo($('.product-popup .mfp-content'));
            },
        }
    });


});



new WOW({
    live: true
}).init();

fixSidebarHeight = function(scroll){
    var footer = $('footer').offset().top;
    var aside = $('.aside-nav');
//    $('title').html(footer + ':' + scroll);
    if (scroll > footer){
        btm = scroll - footer;
        aside.css({'bottom': btm});
        $(".aside-nav ul").niceScroll().resize();
        //aside.css({'transform': 'translateY(-'+btm+'px)'});
    }else{
        //aside.css({'transform': 'translateY(0)'});
    }
}

showFlyMenu = function(scroll){
    gotoElement = $('.fly-menu-goto');
    if (gotoElement.length==0) return;
    gotoValue = gotoElement.offset().top + gotoElement.height() - $('.header').height();
    //$('title').html(gotoValue + ':' + scroll);
    if (scroll > gotoValue) {
        $('body').addClass('fly-menu-open');
    }else{
        $('body').removeClass('fly-menu-open');
    }

}
showFlyMenu(0);

setAnimated = function(){
    var scroll = $(window).scrollTop()+$(window).height();
    var visibled = $('.wow').not('.animated');
    //$('title').html($(window).width() + ':' + scroll);
    visibled.each(function(){
        //alert($(this).offset().top);
       if ($(this).offset().top < scroll){
           $(this).addClass('animated').css({"visibility": "visible"});
       }
    });
}
initFlyMenu = function(scroll, scrollBottom){
    var flymenu = $('.fly-menu');
    if (flymenu.length==0) return;
    flymenu_heigth = flymenu.height();
    flymenu_top = flymenu.position().top;
    /*
    flymenu_bottom = flymenu_heigth+flymenu_top;
    window_height = $(window).height();
    if ((flymenu_heigth+flymenu_top)>window_height){
        flymenu.css({"overflow-y":"auto"}).css({"bottom":0});
    }
    */

    footer_top = $('footer').offset().top;
    //$('title').html(footer_top + ':' + scrollBottom);
    if (scrollBottom > footer_top){
        btm = scrollBottom - footer_top;
        flymenu.css({'bottom': btm});
        $(".fly-menu ul").niceScroll().resize();
    }else{
        flymenu.css({'bottom': 0});
    }

}

correcrHeight = function() {
    elems = $('.product-cards__card');
    if (elems.length>1) {
        max_height = 0;
        elems.each(function(){
            this_height = $(this).outerHeight();
            if (this_height>max_height) {
                max_height = this_height;
            }
        })
        $('.product-cards__card').css({'height': max_height});
    }
}

correcrHeight();

$(document).scroll(function(){
    var scroll = $(window).scrollTop();
    var scrollBottom = scroll + $(window).height();
    fixSidebarHeight(scrollBottom);
    showFlyMenu(scroll);
    initFlyMenu(scroll, scrollBottom);
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


