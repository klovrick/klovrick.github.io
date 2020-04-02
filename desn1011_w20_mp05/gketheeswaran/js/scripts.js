$('.orb').click(function(){
    var event = $(this).attr('data-event');
    if($(this).closest('.event').hasClass('event-light')) {
        console.log(event);
        $('.event-dark.event-'+event).show();
        $('html').css('overflow', 'hidden');
    }
    else {
        $('.event-dark.event-'+event).hide();
        $('html').css('overflow-y', 'auto');
    }
});