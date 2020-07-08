var fadeIn = function() {
    $("body div").animate({
        "opacity": "0",
        "top": "10px"
    }, 500, function() {
        document.location.href = "result_INFP.html";
    });
};

setTimeout(fadeIn, 3000);