const is = require('./is')

module.exports = function () {
  if (!is('.product-list')) {
    return
  }
  $('.d-img').each(function () {
    const src = $(this).find('img').attr('src')
    $(this).children('a').attr('style', `background: url(${src})`).attr('data-fancybox', 'gallery').attr('href', src).append(`<span class="box"><i class="fa fa-search"></i></span>`)
  })

  if(is('.module-sublist')) {
    $('.module-sublist').remove()
  }
}