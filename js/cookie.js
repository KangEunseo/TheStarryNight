function setCookie(strName, strValue, iSecond=3000) {
    var strCookie = strName + "=" + encodeURIComponent(strValue);
    if( typeof iSecond === "number" )
    {
        strCookie += "; max-age=" + iSecond + "; domain=pcnim02.github.io";
    }
    document.cookie = strCookie;
}

function getCookie(name) {
    var value = document.cookie.match('(^|;) ?' + name + "=([^;]*)(;|$)");
    return value? value[2]: null;
}

function deleteCookie(name) {
    setCookie(name, "", 0);
}