"use strict";

(function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);throw new Error("Cannot find module '" + o + "'");
      }var f = n[o] = { exports: {} };t[o][0].call(f.exports, function (e) {
        var n = t[o][1][e];return s(n ? n : e);
      }, f, f.exports, e, t, n, r);
    }return n[o].exports;
  }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
    s(r[o]);
  }return s;
})({ 1: [function (require, module, exports) {
    // const search = require('./search')
    var index_banner = require('./index_banner');
    // const append_member = require('./append_member')
    var gotop = require('./gotop');
    // const prod_side = require('./prod_side')
    // const img_fancybox = require('./img_fancybox')
    var logout = require('./logout');
    var replaceCart = require('./replaceCart');
    var prod_detail = require('./prod_detail');

    $(function () {
      var navH = $('nav.navbar').innerHeight();
      // append_member()
      // search()


      $('.d-item').each(function () {
        $(this).attr('data-aos', 'fade-up');
      });

      gotop();
      setTimeout(function () {
        index_banner(navH);
        // prod_side()
        // img_fancybox()
        prod_detail();
        logout();
        replaceCart();

        AOS.init({
          once: true,
          duration: 700,
          delay: 300
        });
      });

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
    });
  }, { "./gotop": 2, "./index_banner": 3, "./logout": 5, "./prod_detail": 6, "./replaceCart": 7 }], 2: [function (require, module, exports) {
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

    module.exports = function () {
      // scroll top
      $('.gotop').on('click', function () {
        $('html, body').animate({
          scrollTop: 0
        }, 1000);
      });
    };
  }, {}], 3: [function (require, module, exports) {
    var is = require('./is');

    module.exports = function (navH) {
      if (!is('.module-adv') || $(window).width() > 768) {
        return;
      }

      $('.module-adv').css('margin-top', navH);
      // $(window).on('scroll', function () {
      // 	setTimeout(() => {
      // 		const top = $(window).scrollTop()
      // 		if (top > 200) {
      // 			$('.fix-bottom').css('opacity', 1)
      // 		} else {
      // 			$('.fix-bottom').css('opacity', 1)
      // 		}
      // 	})
      // })

      //   $('.idx.section-1 .module-special .d-item').each(function () {
      //     $(this).find('.mdate').prependTo($(this).find('.mbox'))

      //     const url = $(this).find('a').attr('href')
      //     $(this).find('.mbox').append(`<a class="read_more" href="${url}">閱讀更多<span class="svg"></svg></a>`)
      //   })
      //   $('.idx.section-1 .module-special .more a').text('')
      //   $('.idx.section-3 .module-special .more a').text('')

      //   $('.idx.section-4 .owl-carousel').owlCarousel({
      //       items: 1,
      //       autoplay:true,
      //       nav: true,
      //       dots: false,
      //       loop: true,
      //       animateOut: 'fadeOut',
      //       animateIn: 'fadeIn',
      //       autoPlaySpeed: 6500,
      //       autoPlayTimeout: 1500,
      //       smartSpeed: 1500,
      //       autoplayHoverPause: false,
      //       responsiveClass: true,
      //       responsive: {
      //           0: {
      //               items: 2,
      //               margin: 20
      //           },
      //           440: {
      //               items: 2,
      //               margin: 20
      //           },
      //           768: {
      //               items: 4,
      //               margin: 20
      //           },
      //           1100: {
      //               items: 4,
      //               margin: 20
      //           },
      //           1300: {
      //               items: 4,
      //               margin: 20
      //           }
      //       }
      //   })
    };
  }, { "./is": 4 }], 4: [function (require, module, exports) {
    module.exports = function (name) {
      return $(name).is(name);
    };
  }, {}], 5: [function (require, module, exports) {
    module.exports = function () {
      var is_login = readCookie('Cust');
      console.log('%c (／‵Д′)／~ ╧╧ is_login : ', 'padding: .25rem; font-size: 14px; background: #12bdba; color: #fff', is_login);

      if (is_login) {
        $('.social .svg').eq(0).attr('href', '/bin/index.php?Plugin=mobile&Action=mobilelogout');
      }
    };

    function readCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1, c.length);
        }if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    }
  }, {}], 6: [function (require, module, exports) {
    var is = require('./is');

    module.exports = function () {
      if (!is('.module-ecptdetail')) {
        // 商品明細
        return;
      }
      // prodOwlCarousel()
      appendProdInfo();

      $('.module-relate').append("<div class=\"owl-carousel\"></div>");
      $('.module-relate .row.listBS').addClass('item');
      $('.module-relate .row.listBS').appendTo($('.module-relate .owl-carousel'));
      $('.module-relate .owl-carousel').owlCarousel({
        items: 1,
        autoplay: true,
        nav: true,
        dots: false,
        loop: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoPlaySpeed: 5000,
        autoPlayTimeout: 5000,
        navText: [],
        smartSpeed: 1500,
        autoplayHoverPause: false,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            nav: true,
            margin: 15
          },
          440: {
            items: 2,
            nav: true,
            margin: 15
          },
          768: {
            items: 4,
            nav: true,
            margin: 15
          }
        }
      });
    };

    function appendProdInfo() {
      $('.mpro-panel .mpro-name').after($('.prod-info'));
    }

    function prodOwlCarousel() {
      if (is('.module-ecptdetail')) {
        // 商品明細
        // $('.carousel-module').appendTo()
        $('.mpro-preview.col-sm-5').append("<div class=\"carousel-module\">\n      <div class=\"box\">\n        <div class=\"swiper-container main\">\n          <div class=\"swiper-wrapper\">\n        </div>\n      </div>\n        <div class=\"hash-link-container\">\n          <div class=\"hash-link swiper-container\">\n            <div class=\"swiper-wrapper\">\n            </div>\n            </div>\n          <div class=\"swiper-button-next\"></div>\n          <div class=\"swiper-button-prev\"></div>\n        </div>\n      </div>\n    </div>");

        $('.mpro-preview.col-sm-5 img').each(function (idx) {
          var link = $(this).attr('src');
          $('.swiper-container.main .swiper-wrapper').append("<div class=\"swiper-slide\" data-hash=\"prod-" + idx + "\" style=\"background: url(" + link + ");\"></div>");

          $('.hash-link .swiper-wrapper').append("<div class=\"swiper-slide\"><a href=\"#prod-" + idx + "\" style=\"background: url(" + link + ");\"></a></div>");
        });

        var swiper = new Swiper('.swiper-container.main', {
          spaceBetween: 0,
          hashNavigation: {
            watchState: true
          }
        });

        // if ($('.swiper-container.hash-link .swiper-slide').length > 4) {
        //   const swiperHash = new Swiper('.swiper-container.hash-link', {
        //     slidesPerView: 4,
        //     spaceBetween: 0,
        //     navigation: {
        //       nextEl: '.swiper-button-next',
        //       prevEl: '.swiper-button-prev'
        //     }
        //   })
        // }
      }
    }
  }, { "./is": 4 }], 7: [function (require, module, exports) {
    var is = require('./is');

    module.exports = function () {
      if (!is('.module-viewcart')) {
        return;
      }

      var text = $('.module-viewcart >.mt h3').text().split('(')[0].trim();
      $('.module-viewcart >.mt h3').text(text);
    };
  }, { "./is": 4 }] }, {}, [1]);