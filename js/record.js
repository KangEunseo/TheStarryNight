function openQuest() {
    document.getElementById('bg').style.visibility = "visible";
    document.getElementById('ask').style.backgroundColor = "#54626B";
    document.getElementById('askImg').src = "images/record/ask-off.png";
}

window.setTimeout(openQuest(), 5000);

function clickPage(select) {
    $("body div").animate({
        "opacity": "0",
        "top": "10px"
    }, 500, function() {
        setCookie('record', select);
        document.location.href = "food.html";
    });
};