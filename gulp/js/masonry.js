$(function () {
    $('.grid').each(function () {
        $(this).masonry({
            itemSelector: '.grid-item',
            columnWidth: 100
        })
    })
    setTimeout(function () {
        $('.tab-content > div').addClass('tab-pane fade')
    },1000)
})