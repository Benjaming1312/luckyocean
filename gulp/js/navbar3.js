$(function () {
    // 三層選單手機版用
    if ($(window).width() < 768) {
        $('.dropdown-toggle').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            var self = $(this)
            self.parent('li').toggleClass('open')
        })
    } else {
        $('.dropdown-toggle').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
        })
    }
})