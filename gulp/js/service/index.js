const is = require('../is')
module.exports = function () {
  if (!is('.service')) {
    return
  }
  const navH = $('nav.navbar').innerHeight()

  const section1Attr = $('.page.section-1').attr('style')
  $('.page.section-1').attr('style', `${section1Attr}; margin-top: ${navH}px;`)

  /* Click */
  $('.service.section-1 a').click(function () {
    const targetName = $(this).attr('href').split('#')[1]
    const scrollTop = $(`#${targetName}`).offset().top
    scrollTo(scrollTop - navH)
  })
}

function scrollTo (top) {
  console.log('%c (／‵Д′)／~ ╧╧ top : ', 'padding: .25rem; font-size: 14px; background: #12bdba; color: #fff', top)
  $('html, body').animate({
    scrollTop: top
  }, 1000)
}