$(function () {
    // гамбургер меню
    $('.hamburger').on('click', function () {
        $(this).toggleClass('active');
        $('header .menu').toggleClass('active');
    });

    // меню при ресайзе
    let mobile = false;
    let auth = $('.auth');
    let burger = $('.content_list');

    if ($(window).width() < 1195) {

        mobile = true;
        $('header .menu').append(auth);
        $('.content').prepend(burger);
    }

    $(window).on('resize', function () {
        if ($(window).width() < 1200 && !mobile) {
            mobile = true;
            $('header .menu').append(auth);
            $('.content').prepend(burger);
        }

        if ($(window).width() >= 1200 && mobile) {
            mobile = false;
            $('header .container').append(auth);
            $(this, 'header .menu').removeClass('active');
            $('.container').append(burger);
        }
    });

    $('.slider_content').slick({
        centerMode: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows_left" src="img/arrow-left.png" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows_right" src="img/arrow-right.png" alt="">',
        asNavFor: '.number',
        responsive: [
            {
                breakpoint: 1555,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
        ]
    });

    $('.number').slick({
        fade: true,
        asNavFor: '.slider_content'
    });

});



document.querySelector('.send_form').onclick = () => {
    document.body.style.overflow = 'hidden';
    document.querySelector('.modal').style.display = 'flex';
}
document.querySelector('.modal').onclick = function(e){
    if(e.target === this){
        document.body.style.overflow = 'visible';
        this.style.display = 'none'
    }
}