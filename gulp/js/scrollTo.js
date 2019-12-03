// $(function () {
//     $('.gotop a').on('click', function () {
//         $('html, body').animate({
//             scrollTop: 0
//         }, 1000)
//     })
//     $('.scroll').on('click', function () {
//         var section1_top = $('.section_1').offset().top
//         $('html, body').animate({
//             scrollTop: section1_top
//         }, 1000)
//     })
// })

// function scrollFn (target) {
//   console.warn('target', target)
//   var top = $('#' + target).offset().top
//   $('html, body').stop().animate({
//     scrollTop: top - 100
//   }, 1000)
// }

$(function () {
  // scroll top
  $('.gotop').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1000)
  })

  // $(window).scroll(function () {
  //   var windowHeight = $(window).scrollTop()
  //   $('.gotop').stop().animate({
  //     top: windowHeight + 300
  //   }, 1000)
  // })
  // $(window).on('scroll', function () {
  //   let curTop = $(window).scrollTop()
  //   let navHeight = $(window).width() < 768 ? 30 : 85
  //   setTimeout(() => {
  //     if (curTop > navHeight) {
  //       $('.navbar.navbar-fixed-top').addClass('bg-white')
  //     }
  //     else {
  //       $('.navbar.navbar-fixed-top').removeClass('bg-white')
  //     }
  //   })
  // })
  // if (window.location.href.split('#').length > 1) {
  //   if(window.location.href.indexOf('prod') >= 0 || window.location.href.indexOf('case') >= 0) {
  //     return
  //   }
  //   let target = window.location.href.split('#')[1]
  //   scrollFn(target)
  // }

  // $('.nav-right > li a').click(function () {
  //   if ($(this).attr('class') === 'dropdown-toggle') {
  //     return
  //   }

  //   if ($(this).attr('href').indexOf('#') >= 0) {
  //     let target = $(this).attr('href').split('#')[1]
  //     if ($(window).width() < 768) {
  //       $('.navbar-toggle').click()
  //     }
  //     scrollFn(target)
  //   }
  // })
})