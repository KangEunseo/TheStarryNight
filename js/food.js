function clickPage(select) {
    $("body div").animate({
        "opacity": "0",
        "top": "10px"
    }, 500, function() {
        setCookie('food', select);
        document.location.href = "sunset.html";
    });
};