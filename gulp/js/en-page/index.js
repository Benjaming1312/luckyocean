const readCookie = require('../readCookie/index.js')
module.exports = function () {
  const lang = readCookie('PageLang')
  console.log('%c (／‵Д′)／~ ╧╧ lang : ', 'padding: .25rem; font-size: 14px; background: #12bdba; color: #fff', lang)
  if (lang === 'en') {
    $('body').addClass('en-page')
  }
}