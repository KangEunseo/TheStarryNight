function clickPage(select) {
    $("body div").animate({
        "opacity": "0",
        "top": "10px"
    }, 500, function() {
        setCookie('bath', select);
        document.location.href = "dream.html";
    });
};