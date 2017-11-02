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
    
    var innerslider = $(".innerslider");
    innerslider.slick({
        dots: false,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // speed: '3000',
        autoplay: false,
        infinite: true
    });
    $('.innerslider-button.slick__next').on('click', function(){
        innerslider.slick('slickNext');
    });
    $('.innerslider-button.slick__prev').on('click', function(){
        innerslider.slick('slickPrev');
    });

});

/*
var a = new StickySidebar('#sidebar', {
    topSpacing: 0,
    bottomSpacing: 20,
    containerSelector: '#wrapper',
    innerWrapperSelector: '.sidebar__inner'
});
*/

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
        //aside.css({'transform': 'translateY(-'+btm+'px)'});
    }else{
        //aside.css({'transform': 'translateY(0)'});
    }
}

showFlyMenu = function(scroll){
    gotoElement = $('.fly-menu-goto');
    gotoValue = gotoElement.offset().top + gotoElement.height() - $('.header').height();
    $('title').html(gotoValue + ':' + scroll);
    if (scroll > gotoValue) {
        $('body').addClass('fly-menu-open');
    }else{
        $('body').removeClass('fly-menu-open');
    }
}

$(document).scroll(function(){
    var scroll = $(window).scrollTop();
    var scrollBottom = scroll + $(window).height();
    fixSidebarHeight(scrollBottom);
    showFlyMenu(scroll);
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

