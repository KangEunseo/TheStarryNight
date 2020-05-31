function openQuest() {
    document.getElementById('bg').style.visibility = "visible";
    document.getElementById('ask').style.backgroundColor = "rgba(75, 83, 88, 0.8)";
    document.getElementById('askImg').src = "images/ap/ask_on.png";
}

window.setTimeout(openQuest(), 5000);

function clickPage(select) {
    $("body div").animate({
        "opacity": "0",
        "top": "10px"
    }, 500, function() {
        setCookie('artpiece', select);
        document.location.href = "song.html";
    });
};