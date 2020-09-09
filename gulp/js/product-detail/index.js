const is = require('../is')
module.exports = function () {
  if (!is('.prod-intro.detail')) {
    return
  }

  $('.module-detail').addClass('prod-detail')
}