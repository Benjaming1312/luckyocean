// $(function () {
//     // owlcarouselfn('.banner .row .col-xs-12', false, true)
// })
// $('test').click((e) => {
//     return e ? true : false
// })

let navH = $('nav.navbar').innerHeight()

function is (name) {
  return $(name).is(name)
}

function showTitle (dataTitle, lang) {
  const target = isENG(lang) ? 'lang-title-en' : 'lang-title-tw'
  $('.page-title').each(function () {
    if ($(this).attr('data-title') === dataTitle && $(this).hasClass(target)) {
      $(this).removeClass('hidden')
    }
  })
}

function isENG (lang) {
  return lang === 'ENG'
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function calcNavHeightToBanner () {
  const navH = navH - 1

  if (is('.module-adv')) {
    $('.module-adv').attr('style', `margin-top: ${navH}px`)
  }
}

function companyOwl () {
  if (!is('.company')) {
    return
  }

  $('#factory .owl-carousel').owlCarousel({
      items: 1,
      autoplay: false,
      nav: false,
      dots: false,
      loop: true,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      autoPlaySpeed: 3000,
      autoPlayTimeout: 1500,
      smartSpeed: 1500,
      URLhashListener:true,
      autoplayHoverPause: true,
      startPosition: 'URLHash'
  })
  $('#certificate .owl-carousel').owlCarousel({
      items: 1,
      autoplay: true,
      nav: false,
      dots: false,
      loop: true,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      autoPlaySpeed: 3000,
      autoPlayTimeout: 1500,
      smartSpeed: 1500,
      margin:10,
      responsiveClass:true,
      responsive:{
          0:{
            items: 2
          },
          600:{
            items: 3
          },
          1000:{
            items: 8
          }
      }
  })
}

function bindCompanyClick () {
  $('.company-dropdown a').click(function (e) {
    e.preventDefault()
    e.stopPropagation()
    const target = $(this).attr('href').split('#')[1]
    const link = $(this).attr('href').split('#')[0]
    if (window.location.href.indexOf(link) >= 0) {
      scrollToTarget(target)
      if ($(window).width() < 768) {
        $('.navbar-toggle').click()
      }
    }
    else {
      window.location.href = $(this).attr('href')
    }
  })
}

function pageScroll () {
  const target = window.location.href.split('#')[1]
  if (target) {
    scrollToTarget(target)
  }
}

function scrollToTarget (target) {
  const targetTop = $(`#${target}`).offset().top
  $('html, body').stop().animate({
    scrollTop: targetTop - navH
  }, 1000)
}


$(function () {
  navH = $('nav.navbar').innerHeight()

  if (is('.idx.section-4') && window.innerWidth > 440) {
    $('.module-form .formBS').append(`<div class="group-1"></div><div class="group-2"></div>`)

    $('.module-form .form-group').each(function (idx) {
      if (idx > 4) {
        $(this).appendTo($('.module-form .group-2'))
      }
      else {
        $(this).appendTo($('.module-form .group-1'))
      }
    })

    $('.form-btn .btn').each(function () {
      console.log('%c (／‵Д′)／~ ╧╧ test : ', 'padding: .25rem; font-size: 14px; background: #12bdba; color: #fff', $(this).text())
      if ($(this).text() === '送 出') {
        $(this).appendTo($('.module-form .group-2'))
      }
    })
  }
  companyOwl()
  pageScroll()
  bindCompanyClick()
  // $('.hdmenu .nav.navbar-nav').appendTo('.navbar .social')

  // if (is('.table-responsive') && is('.module-rcglist')) {
  //   const isSupportPage = is('.support')
  //   $('.page-banner').prependTo('.wrap >.minner >.main')
  //   $('.page_mobilercglist').addClass(!isSupportPage ? 'research' : 'research support')

  //   $('.module-rcglist .mt').prependTo('.research-table')

  //   $('#pageptlist .listBS').each(function (idx) {
  //     const title = $(this).find('.d-txt h5 a').text()
  //     const link = $(this).find('.d-txt h5 a').attr('href')
  //     let category = $(this).find('.mdetail').text()
  //     let from
  //     if(isSupportPage) {
  //       from = $(this).find('.mdetail .from').text()
  //       category = $(this).find('.mdetail .category').text()
  //     }

  //     $('.research-table tbody').append(`<tr>
  //     <td>${idx}</td>
  //     <td>
  //       <a target="${isSupportPage ? '_blank' : '_self'}" href="${link}">${title}</a>
  //       <p class="${!isSupportPage ? 'hidden' : 'from'}">${from}</p>
  //     </td>
  //     <td>${category}</td>
  //     </tr>`)
  //   })
  // }
  // if ('.productlist') {
  //   if (window.location.href.indexOf('/prod/') >= 0) { // 明細
  //     $('body').addClass('product-detail')
  
  //     const swiper = new Swiper('.swiper-container.main', {
  //       spaceBetween: 30,
  //       hashNavigation: {
  //         watchState: true
  //       }
  //     })
  
  //     if ($('.swiper-container.hash-link .swiper-slide').length > 4) {
  //       const swiperHash = new Swiper('.swiper-container.hash-link', {
  //         slidesPerView: 4,
  //         spaceBetween: 10,
  //         navigation: {
  //           nextEl: '.swiper-button-next',
  //           prevEl: '.swiper-button-prev'
  //         }
  //       })
  //     }
  //     $('.page-banner').addClass('hidden')
  //   }
  //   else { // 分類
  //     $('.productlist .productlist-main >.row').each(function (idx) {
  //       if (idx === 0 || idx === $('.productlist .productlist-main >.row').length) return
  //       $(this).find('.col-sm-6').appendTo($('.productlist .productlist-main >.row').eq(1))
  //     })
  //   }
  // }
  // var nav
  // var lang = readCookie('ulang')
  // if (!isENG(lang)) {
  //   nav = '.lang-tw'
  //   $('.lang-tw').removeClass('hidden')
  //   $('.lang-en').addClass('hidden')
  //   $('body').addClass('tw')
  //   $('body').removeClass('en')
  // }
  // else {
  //   nav = '.lang-en'
  //   $('.lang-en').removeClass('hidden')
  //   $('.lang-tw').addClass('hidden')
  //   $('body').addClass('en')
  //   $('body').removeClass('tw')
  // }

  // // lang
  // $('#alang').appendTo($(`${nav} .special .lang`))

  // if (!is('#homebody')) {
  //   $('.page-banner').removeClass('hidden')
  // }

  // if (window.location.href.indexOf('products') >= 0 || window.location.href.indexOf('productcate') >= 0) {
  //   $('body').addClass('product-list')
  //   showTitle('product', lang)

  //   if (!isENG(lang)) {
  //     $('#ContentPlaceHolder1_h3catetitle').text('產品列表')
  //   }
  //   else {
  //     $('#ContentPlaceHolder1_h3catetitle').text('Products')
  //   }
  // }

  // if (is('.product-iframe-title')) {
  //   $('.productlist-main .row').eq(0).hide()
  //   $('.productlist-main .row').eq(1).hide()
  //   $('.productlist-main .row').eq(2).hide()
  // }

  

  // if (window.location.href.indexOf('/contact') >= 0) {
  //   const target = isENG(lang) ? 'contact-en' : 'contact-tw'
  //   showTitle('contactus', lang)
  //   $('body').addClass('contact')
  //   $(`.contact.append.${target}`).removeClass('hidden')
  //   $(`.contact.append.${target}`).appendTo($('.contact.product .col-sm-4'))
  //   $('.contact.product .col-sm-4 address').remove()

  //   if (!isENG(lang)) {
  //     $('#ContentPlaceHolder1_txtText').attr('placeholder', '公司名稱')
  //   }
  //   else {
  //     $('#ContentPlaceHolder1_txtText').attr('placeholder', 'Company')
  //   }
  // }

  // if (is('.blog-post')) {
  //   showTitle('news', lang)
  //   if (window.location.href.indexOf('newslist') >= 0) {
  //     const text = isENG(lang) ? 'read more' : '閱讀更多'
  //     $('.blog').addClass('newslist')
  //     $('.blog-post').each(function () {
  //       const imgLink = $(this).find('img').attr('src')
  //       $(this).prepend(`<div class="img"><img src="${imgLink}"></div>`)
  //       $(this).append('<div class="content"></div>')
  //       $(this).find('.post-hd').appendTo($(this).find('.content'))
  //       $(this).find('.post-con').appendTo($(this).find('.content'))
  //       $(this).find('img').parent('p').remove()
  //       $(this).find('.con-more a').text(text)
  //     })
  //   }
  //   else if (window.location.href.indexOf('newslist') < 0) {
  //     $('.blog').addClass('detail')
  //   }
  // }

  // if (is('.product-info')) {
  //   if ($(window).width() > 768) {
  //     $('.product-detail .product-info').appendTo($('.col-sm-4.product-info'))
  //   }
  //   else {
  //     $('.product-detail .product-info').prependTo($('.productlist-main .col-sm-8'))
  //   }
  // }
  
  setTimeout(() => {
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
