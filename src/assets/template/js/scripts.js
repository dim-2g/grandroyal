$(function() {
    $('.nav-toggle').click(function(){
        $('body').toggleClass('has-nav-open');
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
    $('title').html(footer + ':' + scroll);
    if (scroll > footer){
        btm = scroll - footer;
        //aside.css({'bottom': btm});
        aside.css({'transform': 'translateY(-'+btm+'px)'});
    }
}

$(document).scroll(function(){
    var scroll = $(window).scrollTop();
    var scrollBottom = scroll + $(window).height();
    fixSidebarHeight(scrollBottom);
});