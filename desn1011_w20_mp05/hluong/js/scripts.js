 $(document).ready(function() {
     $('html, body, *').mousewheel(function(e, delta) {
         this.scrollLeft -= (delta);
         e.preventDefault();
     });
});

$(window).scroll(function () {
    //save a variable with the current scroll position (a number value)
    var scrollPos = $(window).scrollLeft();

    //Checking position of the scroll position being greater than each of the sections and then fading in its text as it reaches that section.
    if (scrollPos > (($('.gun-section').offset().left)-300) && scrollPos < $('.consequences-section').offset().left) {
        $('.bullet').show();
    }
    else {
        if($('.bullet').is(":visible")) {
            $('.bullet').hide();
        }
    }

    if (scrollPos > (($('.pink-section').offset().left)+300) && scrollPos < $('.gun-section').offset().left) {
        $('.car').show();
    }
    else {
        if($('.car').is(":visible")) {
            $('.car').hide();
        }
    }
});

//the below allows for smooth animated scrolling when using jump links
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollLeft: $($.attr(this, 'href')).offset().left
    }, 500);
});

$('.postcard').click(function() {
    $(this).hide();
    $('.postcard-back').show();
 });

$('.postcard-back').click(function() {
    $(this).hide();
    $('.postcard').show();
 });

$('.tape1').click(function() {
    if($('.notes').is(":visible")){
        $('.music, .notes').fadeOut(500);
    }
    else {
        $('.music, .notes').fadeIn(500);
    }
 });


$(".tape1").hover(function(){
        $("#two .deb").css("filter", "grayscale(100%)");
        $("#two .baby").css("filter", "grayscale(100%)");
        $(this).closest('.section').addClass('bw');
        $("#two h2").css("filter", "grayscale(100%)");
    }, function(){
        $("#two .deb").css("filter", "none");
        $("#two .baby").css("filter", "none");
        $(this).closest('.section').removeClass('bw');
        $("#two h2").css("filter", "none");
    });

 $('.music, .notes').click(function() {
    $('.music, .notes').fadeOut(500);
 });

 $('.window').click(function() {
    $(this).hide();
    $('.window-open, .window-text').show();
 });

 $('.window-open, .window-text').click(function() {
    $('.window-open, .window-text').hide();
    $('.window').show();
 });

 $(".windows").hover(function(){
    $(".driver-section .car, .driver-section .floor, .driver-section .wall").css("filter", "grayscale(100%)");
    $(this).closest('.section').addClass('bw');
    $(".driver-section h2").css("filter", "grayscale(100%)");
}, function(){
    $(".driver-section .car, .driver-section .floor, .driver-section .wall").css("filter", "none");
    $(this).closest('.section').removeClass('bw');
    $(".driver-section h2").css("filter", "none");
});

$(".postcard").hover(function(){
    $(this).closest('.section').addClass('bw');
    $(".final-section h2").css("filter", "grayscale(100%)");
}, function(){
    $(this).closest('.section').removeClass('bw');
    $(".final-section h2").css("filter", "none");
});