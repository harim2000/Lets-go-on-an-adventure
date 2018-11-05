'use strict'

let state = {
    numResults:0
}

fetch('wta-parks-data.json')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        renderTrailCards(data);
    });

function renderTrailInfo(trail){
    
    if(trail.elevation['Highest Point'] != null && trail.elevation.Gain != null){
        state.numResults = state.numResults + 1;

        let trailListItem = $('<li>');
        let trailCard = $('<div class="trailCard">');
        trailListItem.append(trailCard);
        $('ul.list').append(trailListItem);

        let trailImg = $('<span class="trail-img">');
        trailCard.append(trailImg);

        let trailInfo = $('<span class="trail-info">');
        trailCard.append(trailInfo);

        if(trail.name.includes('Park')){
            trailImg.append($('<img class="trailIcon" src="img/icon-forrest.png">'));
        }else if(trail.name.includes('Lake')){
            trailImg.append($('<img class="trailIcon" src="img/icon-lake.png">'));
        }else if(trail.name.includes('Peak') || trail.name.includes('Point')){
            trailImg.append($('<img class="trailIcon" src="img/icon-peak.png">'));
        }else if(trail.name.includes('Mount')){
            trailImg.append($('<img class="trailIcon" src="img/icon-mountain.png">'));
        }else if(trail.name.includes('Lookout') || trail.name.includes('View')){
            trailImg.append($('<img class="trailIcon" src="img/icon-lookout.png">'));
        }else if(trail.name.includes('Ledge') || trail.name.includes('Ridge')){
            trailImg.append($('<img class="trailIcon" src="img/icon-ridge.png">'));
        }else if(trail.name.includes('Butte')){
            trailImg.append($('<img class="trailIcon" src="img/icon-butte.png">'));
        }else if(trail.name.includes('Pass')){
            trailImg.append($('<img class="trailIcon" src="img/icon-pass.png">'));
        }else if(trail.name.includes('Basin')){
            trailImg.append($('<img class="trailIcon" src="img/icon-basin.png">'));
        }else if(trail.name.includes('Cave')){
            trailImg.append($('<img class="trailIcon" src="img/icon-cave.png">'));
        }else if(trail.name.includes('River') || trail.name.includes('Creek')){
            trailImg.append($('<img class="trailIcon" src="img/icon-river.png">'));
        }else if(trail.name.includes('Canyon')){
            trailImg.append($('<img class="trailIcon" src="img/icon-canyon.png">'));
        }else if(trail.name.includes('Dome')){
            trailImg.append($('<img class="trailIcon" src="img/icon-dome.png">'));
        }else{
            trailImg.append($('<img class="trailIcon" src="img/icon-else.png">'));
        }
        let name = $('<h2 class="trail-name">');
        name.text(trail.name);
        trailInfo.append(name);
        
        let highElevation = $('<span>');
        highElevation.text('Highest Point: ' + trail.elevation['Highest Point'])
        trailInfo.append(highElevation);
    

        let gain = $('<span>');
        gain.text('Gain: ' + trail.elevation.Gain);
        trailInfo.append(gain);

        let length = $('<span>');
        length.text('Length: ' + trail.length);
        trailInfo.append(length);

    }
}

function renderTrailCards(data){
    for(let trail in data){
        renderTrailInfo(data[trail]);
    }
}


function filterCards(keyword){
    let list = $($('div.trails')[0].children[0])[0].children;
    console.log(list.length);

    keyword = keyword.toUpperCase();      

    for(let i=0; i < list.length; i++){
        
        let trail = $($(list[i])[0].children[0]);
        let trailName = $(trail[0].children[1].children[0])[0].textContent;
        
        if(trailName.toUpperCase().indexOf(keyword) > -1){
            trail.removeClass('hideCard');
            trail.addClass('showCard');
        } else{
            trail.removeClass('showCard');
            trail.addClass('hideCard');
        }
    }
}

$(function(){
    $('.filters .button').click(function(){
        filterCards($('#trail-search')[0].value);        
    });
    
    let trailCards = $('.trailCard');
    trailCards.slice(4).hide();

    $('#light-pagination').pagination({
        items: state.numResults,
        itemsOnPage: 4,
        cssStyle: 'dark-theme',
        
        onPageClick: function(pageNumber){
            let showFrom = 4 * (pageNumber - 1);
            let showTo = showFrom + 4;

            trailCards.hide().slice(showFrom, showTo).show();
        }
    });

});
