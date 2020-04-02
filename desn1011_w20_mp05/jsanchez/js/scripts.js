$(function() {
    $("html").mousewheel(function(event, delta) {
       this.scrollLeft -= (delta);
       event.preventDefault();
    });
 });
 
$('.close-popup').click(function (event) {
    event.preventDefault();
    $('.overlay').closest('.overlay').hideClass('.open');
});

$(".button").on("click", function () {
    var popup = $(this).attr('data-popup');
    $('.'+popup).addClass("active");
});

$(".overlay").on("click", function () {
    $(".overlay").removeClass("active");
});

$(document).ready(function(){
    $("a").click(function(event){
      event.preventDefault();
    });
  });