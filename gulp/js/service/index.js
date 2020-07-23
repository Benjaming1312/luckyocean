const is = require('../is')
module.exports = function () {
  if (!is('.service')) {
    return
  }
  const navH = $('nav.navbar').innerHeight()

  const section1Attr = $('.page.section-1').attr('style')
  $('.page.section-1').attr('style', `${section1Attr}; margin-top: ${navH}px;`)

  /* Click */
  $('.service.section-1 li a').click(function (e) {
    e.preventDefault()
    e.stopPropagation()

    const href = $(this).attr('href').split('#')[0]
    console.log('%c (／‵Д′)／~ ╧╧ href : ', 'padding: .25rem; font-size: 14px; background: #12bdba; color: #fff', href)

    if (window.location.href.indexOf(href) < 0) {
      window.location.href = $(this).attr('href')
    }
    const targetName = $(this).attr('href').split('#')[1]
    const scrollTop = $(`#${targetName}`).offset().top
    scrollTo(scrollTop - navH)
  })
}

function scrollTo (top) {
  $('html, body').animate({
    scrollTop: top
  }, 1000)
}