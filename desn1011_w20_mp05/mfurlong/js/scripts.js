
$(window).on("load", function() {
    //once images are loaded:
    //wait 3 seconds
    setTimeout(function(){
        $('body').removeClass('loading');
        $('.loading-window').addClass('loaded');
      }, 3000);
});

$(document).ready(function() {
    $('html, body, *').mousewheel(function(e, delta) {
        this.scrollLeft -= (delta);
        e.preventDefault();
    });
});


$('.mapicon').click(function(){
    $('.map').css('display', 'flex');
    $('.overlay').show();
});

$('.helpicon').click(function(){
    $('.help').css('display', 'flex');
    $('.overlay').show();
})


$('.close-popup').click(function(){
    $('.map').hide();
    $('.overlay').hide();
});

$('.close-popup').click(function(){
    $('.help').hide();
    $('.overlay').hide();
});

$('.one, .two, .three, .four, .five, .six, .seven, .eight, .nine').click(function(){
    $('.map').hide();
    $('.overlay').hide();
});
