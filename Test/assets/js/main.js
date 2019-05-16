$(document).ready(function(){
    $('.hamburger').click(function(){
        if($(this).hasClass('is-active')){
            $('.hamburger, .main-nav').removeClass('is-active'); 
            $('.main-nav').slideUp();
        }else{
            $('.hamburger, .main-nav').addClass('is-active');
            $('.main-nav').slideDown();
        }
    });
        
    $(".slider").slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: "linear",
        arrows: true
    });

    var offset = 250;
    var duration = 300;
 
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(duration);
        } else {
            $('.back-to-top').fadeOut(duration);
        }
    });

    $('.back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    });


    $('[data-link]').click(function(){
        var name = $(this).data('link');
        var off = $('section#' + name).offset().top;
        if(name == 'contact') off = off + 100;
        $('html, body').animate({ scrollTop: off - 100}, 500);
    });
});