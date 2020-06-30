const is = require('../is')
module.exports = function () {
  if (!is('.service')) {
    return
  }
  const navH = $('nav.navbar').innerHeight()

  /* Initial */
  const directTarget = window.location.href.split('#')[1]
  if (directTarget) {
    const targetTop = $(`#${directTarget}`).offset().top
    scrollTo(targetTop - navH)
  }

  /* Click */
  $('.service.section-1 a').click(function () {
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