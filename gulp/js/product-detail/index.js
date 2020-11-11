const is = require('../is')
module.exports = function () {
  if (!is('.prod-intro.detail')) {
    return
  }

  $('.module-detail').addClass('prod-detail')
  const titleWidth = $('.img h4.title').innerWidth()
  if ($(window).width() > 768) {
    $('.img h4.title').attr('style', `right: -${titleWidth + 15}px`)
  }
}