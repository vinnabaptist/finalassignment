// mobile nav //
function toggleMobileNav(){
    $('nav, .mobile-nav').toggleClass('open');
  }

$(document).ready(function(){
  $('.mobile-nav').click(toggleMobileNav);
});

// recipe slideToggle //

// $('.recipe').click(function(){
//         $('#show-on-click').slideDown();
//         $('.recipe').hide();
//         $('.close').show();
//         event.preventDefault();
//     });

// $('.close').click(function(){
//     $('#show-on-click').slideUp();
//     $('.close').hide();
//     $('.recipe').show();
//     event.preventDefault();
// });

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
