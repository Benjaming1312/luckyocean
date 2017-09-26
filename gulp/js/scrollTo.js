$(function () {
    $('.gotop a').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000)
    })
    $('.scroll').on('click', function () {
        var section1_top = $('.section_1').offset().top
        $('html, body').animate({
            scrollTop: section1_top
        }, 1000)
    })
})