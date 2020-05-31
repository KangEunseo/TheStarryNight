function isMobile(){ //모바일 여부
    var uAgent = navigator.userAgent.toLowerCase();

    var mobilePhones = new Array('iphone', 'ipod', 'ipad', 'android', 'blackberry', 'windows ce', 'nokia', 'webos', 'opera mini', 'sonyericsson', 'opera mobi', 'iemobile');
    for(var i = 0; i < mobilePhones.length; i++){
        if(uAgent.indexOf(mobilePhones[i]) != -1)
            document.location = "아직임"
    }
}