const is = require('./is')

module.exports = function (navH) {
	if (!is('.module-adv')) {
		return
	}

	$('.module-adv').css('margin-top', navH)
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
}