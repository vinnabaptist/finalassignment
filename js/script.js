// mobile nav //
function toggleMobileNav(){
    $('nav, .mobile-nav').toggleClass('open');
  }

$(document).ready(function(){
  $('.mobile-nav').click(toggleMobileNav);
});


$(".recipe").click(function() {
        $(this).prev().slideDown();
        $(this).hide();
        event.preventDefault();
    });

$(".close").click(function() {
    $(this).parent().slideUp();
    $(this).parent().next().show();
    event.preventDefault();

});

//carousel//
jQuery(document).ready(function ($) {
  
    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;
    
    $('#slider').css({ width: slideWidth, height: slideHeight });
    
    $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});    

