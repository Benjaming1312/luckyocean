    // 放css到head，避免後台載入css
    function appendCss (link) {
        var cssLink =  '<link ' + 'rel="stylesheet" ' + 'href="' + link + '">'
        $('head').append(cssLink)
    }    