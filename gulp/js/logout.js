module.exports = function () {
  const is_login = readCookie('Cust')
  console.log('%c (／‵Д′)／~ ╧╧ is_login : ', 'padding: .25rem; font-size: 14px; background: #12bdba; color: #fff', is_login)

  if (is_login) {
    $('.social .svg').eq(0).attr('href', '/bin/index.php?Plugin=mobile&Action=mobilelogout')
  }
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
     var c = ca[i];
     while (c.charAt(0) == ' ') c = c.substring(1, c.length);
     if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}