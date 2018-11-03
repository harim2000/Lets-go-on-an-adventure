'use strict'


$('.show-menu').click(function(){
    $('.navbar').removeClass('navbarHidden');
    $('.navbar').addClass('navbarShown');
});
$('.hide-menu').click(function(){
    $('.navbar').removeClass('navbarShown');
    $('.navbar').addClass('navbarHidden');
});

fetch('wta-parks-data.json')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    });
