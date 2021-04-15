const is = require('./is')

module.exports = function () {
  if (!is('.module-viewcart')) {
    return
  }

  const text = $('.module-viewcart >.mt h3').text().split('(')[0].trim()
  $('.module-viewcart >.mt h3').text(text)
}