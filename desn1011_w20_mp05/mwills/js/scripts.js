$(document).ready(function() {
    $('html, body, *').mousewheel(function(e, delta) {
        this.scrollLeft -= (delta);
        e.preventDefault();
    });
});

$('.menu').click(function(){
    openOrClose();
});


$('.overlay').click(function(){
    openOrClose();
});

$('.menu-popup a').click(function() {
    openOrClose();
});


function openOrClose() {
    $('.menu-popup').toggleClass('open');
    $('.overlay').toggleClass('open');
}

$('.play').click(function() {
    $('.home-overlay').remove();
});