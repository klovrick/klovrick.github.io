//mouse wheel code -- delete everything inbetween if only using track pad
$(document).ready(function() {
    $('html, body, *').mousewheel(function(e, delta) {
        if($(".slider.open")[0]){

        }
        else {
            this.scrollLeft -= (delta);
            e.preventDefault();
        }
    });
});
//end mouse wheel code

//the below allows for smooth animated scrolling when using jump links
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollLeft: $($.attr(this, 'href')).offset().left
    }, 500);
});

//scenes slide up
$(".slide-up").click (function(event) {
    event.preventDefault();
    //grab attribute
    var theSlide = $(this).attr('data-slide');
    $('.slider').not(theSlide).removeClass("open");
    $(theSlide).toggleClass("open");
    $('.slider-overlay').toggleClass("open");
});

$('.slider-overlay').click(function(event) {
    $('.slider').removeClass("open");
    $('.slider-overlay').removeClass("open");
    $('video').trigger('pause');
});

$('.video-overlay').click(function(event){
    $(this).closest('.slider').children('video').trigger('play');
    $(this).closest('.slider').children('video').attr('controls',true);
    $('.video-overlay').removeClass('open');
});

$('video').bind('pause', function () { //should trigger once on every pause event
    $('.video-overlay').addClass('open');
});



//front of profiles
$('.character-profiles').click(function(event){
    event.preventDefault();
    $(".popup").toggleClass("target");
});

//expanded profiles
$("#profiles a").click(function(event){
    event.preventDefault();
    $('.profile-open').removeClass('target');
    //grab attribute
    var theProfile = $(this).attr('data-profile');
    $(".popup").removeClass('target');
    $(theProfile).toggleClass("target");
});

$(".close").click(function(){
    $(".profile-open").removeClass("target");
    $('.popup').toggleClass('target');
});

//character profiles click out

