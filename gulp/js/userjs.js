// const search = require('./search')
// const index_banner = require('./index_banner')
// const append_member = require('./append_member')
// const gotop = require('./gotop')
// const prod_side = require('./prod_side')
// const img_fancybox = require('./img_fancybox')
const logout = require('./logout')
const replaceCart = require('./replaceCart')


$(function () {
  // const navH = $('nav.navbar').innerHeight()
  // append_member()
  // search()


  $('.d-item').each(function () {
    $(this).attr('data-aos', 'fade-up')
  })
  
  // gotop()
  setTimeout(() => {
    // index_banner(navH)
    // prod_side()
    // img_fancybox()
    logout()
    replaceCart()

    AOS.init({
      once: true,
      duration: 700,
      delay: 300
    })
  })

  // setTimeout(() => {
  //   if (window.location.href.indexOf('#aboutus') >= 0) {
  //     var target = isENG(lang) ? 'aboutus-en' : 'aboutus-tw'
  //     if (window.location.href.indexOf(target) < 0) {
  //       return
  //     }

  //     // var top = $('#' + target).offset().top
  //     // $('html, body').stop().animate({
  //     //   scrollTop: top - 100
  //     // }, 1000)
  //   }
  // }, 1000);
})
