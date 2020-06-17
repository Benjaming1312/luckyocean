module.exports = function () {
  $('.toggle-search').click(function () {
    if ($(window).width() < 768) {
      $('.formBS .btn').click()
      return
    }

    // hide
    if ($('.nav-form.show').is('.nav-form.show')) {
      $('.nav-form').removeClass('show')
    }
    // show
    else {
      $('.nav-form').addClass('show')
    }
  })
}