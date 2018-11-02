'use strict'


$('.show-menu').click(function(){
    $('.navbar').removeClass('navbarHidden');
    $('.navbar').addClass('navbarShown');
});
$('.hide-menu').click(function(){
    $('.navbar').removeClass('navbarShown');
    $('.navbar').addClass('navbarHidden');
});


// $('.show-menu').click(function(){
//     $('.navbar').css({
//         'animation-duration': '.5s',
//         'animation-name': 'slidein',
//         'left': '0',
//     });
// });

// $('.hide-menu').click(function(){
//     $('navbar').css({
//         'animation-duration':'.5s',
//         'animation-name':'slideOut',
//         'left':'-300px'
//     });
// });