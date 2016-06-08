var gifs = new Array(
    'img/1.gif',
    'img/2.gif',
    'img/3.gif',
    'img/4.gif',
    'img/5.gif',
    'img/6.gif',
    'img/7.gif',
    'img/8.gif',
    'img/9.gif',
    'img/10.gif',
    'img/11.gif',
    'img/12.gif',
    'img/13.gif',
    'img/14.gif',
    'img/15.gif',
    'img/16.gif',
    'img/17.gif',
    'img/18.gif'
);
var i = 0;
var audioElement = document.createElement('audio');
audioElement.setAttribute('src', 'audio.mp3');

$('html').keyup(function() {
    if (event.which === 32) {
        $(this).css('background-image', 'url(' + gifs[i] + ')');
        audioElement.play();
        i++;
        if (i > 17) {
            i = 0;
        }
    }
});
// $('html').click(function() {
//     $(this).css('background-image', 'url(' + gifs[i] + ')');
//     i++;
//     if (i > 17) {
//         i = 0;
//     }
// });
