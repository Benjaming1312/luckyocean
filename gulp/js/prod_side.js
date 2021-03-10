const is = require('./is')
module.exports = function () {
  if (!is('.shop-list')) {
    return
  }

  collapsedAside()

  if (is('.product-banner')) {
    $('.product-banner').prependTo($('.module-cglist'))
  }

  $('.module-cglist').appendTo($('.shop-list .append'))
  $('.module-ptlist').appendTo($('.shop-list .append'))
  $('.module-ecptdetail').appendTo($('.shop-list .append'))

  if ($(window).width() < 769) {
    $('#pageptlist .d-item').each(function () {
      $(this).appendTo($('.row.listBS').eq(0))
    })
  }
}

function collapsedAside () {
  if (is('.product-list')) {
    $('aside a').each(function () {
      const aTarget = $(this)
      const isTarget = window.location.href.indexOf(aTarget.attr('href')) >= 0
      let removeCollpased
      if (isTarget) {
        aTarget.addClass('active')
        aTarget.parents().each(function () {
          const collapse = $(this).attr('class')
          if (collapse && collapse.indexOf('collapse') >= 0) {
            $(this).addClass('in')
            removeCollpased = $(this).attr('id')

            if (removeCollpased) {
              $(`aside a[href="#${removeCollpased}"]`).removeClass('collapsed')
            }
          }
        })
        if (aTarget.siblings().is('.collapsed')) {
          aTarget.siblings().click()
        }
      }
    })
  }
}