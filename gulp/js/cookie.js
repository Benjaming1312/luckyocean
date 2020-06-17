module.exports = function () {
  const gotIt = window.localStorage.getItem('gotIt')

  if (gotIt !== 'true') {
    console.log('%c (／‵Д′)／~ ╧╧ gotIt : ', 'padding: .25rem; font-size: 14px; background: #12bdba; color: #fff', gotIt)
    gsap.fromTo('.cookie-notify', 
    {
      y: 100,
      opacity: 0,
      duration: 1.5
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.5
    }
    )
  }

  $('.gotIt').click(function () {
    window.localStorage.setItem('gotIt', true)
    gsap.to('.cookie-notify', {
      y: 100,
      opacity: 0,
      duration: 1.5
    })
  })
}