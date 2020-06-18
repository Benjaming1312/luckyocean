module.exports = function () {
  const gotIt = window.localStorage.getItem('gotIt')

  if (gotIt !== 'true') {
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
  else {
    gsap.to('.cookie-notify', {
      y: 100,
      opacity: 0,
      duration: 1.5
    })
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