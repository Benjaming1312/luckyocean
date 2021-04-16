const is = require('./is')

module.exports = function () {
  if (!is('.module-ecptdetail')) { // 商品明細
    return
  }
  // prodOwlCarousel()
  appendProdInfo()

  $('.module-relate').append(`<div class="owl-carousel"></div>`)
  $('.module-relate .row.listBS').addClass('item')
  $('.module-relate .row.listBS').appendTo($('.module-relate .owl-carousel'))
  $('.module-relate .owl-carousel').owlCarousel({
      items: 1,
      autoplay:true,
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
          },
      }
  })
}

function appendProdInfo () {
  $('.mpro-panel .mpro-name').after($('.prod-info'))
}

function prodOwlCarousel () {
  if (is('.module-ecptdetail')) { // 商品明細
    // $('.carousel-module').appendTo()
    $('.mpro-preview.col-sm-5').append(`<div class="carousel-module">
      <div class="box">
        <div class="swiper-container main">
          <div class="swiper-wrapper">
        </div>
      </div>
        <div class="hash-link-container">
          <div class="hash-link swiper-container">
            <div class="swiper-wrapper">
            </div>
            </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
    </div>`)

    $('.mpro-preview.col-sm-5 img').each(function (idx) {
      const link = $(this).attr('src')
      $('.swiper-container.main .swiper-wrapper').append(`<div class="swiper-slide" data-hash="prod-${idx}" style="background: url(${link});"></div>`)

      $('.hash-link .swiper-wrapper').append(`<div class="swiper-slide"><a href="#prod-${idx}" style="background: url(${link});"></a></div>`)
    })

    const swiper = new Swiper('.swiper-container.main', {
      spaceBetween: 0,
      hashNavigation: {
        watchState: true
      }
    })

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