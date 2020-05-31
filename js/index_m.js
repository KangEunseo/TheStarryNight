let i = 0;

function playAudio() {
    var audio = document.getElementById('playAudio');

    if(i === 0){ audio.play(); i = 1; }
    else { audio.pause(); i = 0; }
}

function inTitle() {
    document.getElementById('title').src="images/index_m/title_hover.png";
}

function outTitle() {
    document.getElementById('title').src="images/index_m/title.png";
}