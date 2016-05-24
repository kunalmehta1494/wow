$('.widget').mouseenter(function(){
    $(this).css('width','11rem');
    $(this).find('.text').removeClass('hide');

})
$('.widget').mouseleave(function(){
    $(this).css('width','4rem');
    $(this).find('.text').addClass('hide');
})
