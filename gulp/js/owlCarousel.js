function owlcarouselfn(target,nav,dot) {
    $(target).owlCarousel({
        items: 1,
        autoplay:true,
        nav: nav,
        dots: dot,
        loop: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoPlaySpeed: 3000,
        autoPlayTimeout: 1500,
        // smartSpeed: 1500,
        autoplayHoverPause: false,
    })
}
$(function () {
    owlcarouselfn('.banner .owl-carousel', false, true)
    if ($(window).width() < 768) {
        $('.banner').append($('.banner >.hgroup'))
    }
})