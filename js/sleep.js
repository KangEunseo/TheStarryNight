var fadeIn = function(select) {
    $("body div").animate({
        "opacity": "0",
        "top": "10px"
    }, 500, function() {
        document.location.href = "dream.html";
    });
};

setTimeout(fadeIn, 7000);