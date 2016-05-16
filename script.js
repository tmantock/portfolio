$(document).ready(function (){
    $('.projectImageContainer').on('click', function () {
        var info = $(this).attr('data-information');
        var id = '#' + info;
        $(id).css({height: '100%', width: '100%'});
        $('.list_container').css('display','none');
        var infoPosition =  $(id).position().top;
        $('.projectContainer').animate({top:(infoPosition) * -1 +'px'},700, function () {
            $('.projectTextContainer').css('display','block');
        });
        setTimeout(function () {
        if(info == 'projectInformationTwo') {
            starScroll();
            // wheatleyToDom();
        }
        },710);
    });

    $('.projectInformation').on('click', function () {
        var info = $(this).attr('data-project');
        var id = '#' + info;
        var projectPosition = $(id).position().top;
        $('.projectTextContainer').css('display','none');
        $('.small_star').remove();
        $('.big_star').remove();
        // $('.wheatley_container').remove();
        $('.projectContainer').animate({top:(projectPosition) * -1 + 'px'},1300, function () {
            $('.list_container').css('display','block');
            $('.projectInformation').css({height:'0', width: '100%'});
        });
    });
});

function pageScroll (element) {
    var project = $(element).attr('data-project');
    var information = $(element).attr('data-information');
    var listItem = $('.projectTitle');
    var id = '#' + project;
    var projectPosition = $(id).position().top;

    if(listItem.hasClass('selectProject')) {
        listItem.removeClass('selectProject');
    }
    
    if(project == 'projectThree') {
        $('.navbar li').css('color','black');
    }
    // if(project == 'projectTwo') {
    //     panelCreation();
    // }
    else{
        $('.navbar li').css('color','#ffffff');
    }

    $(element).addClass('selectProject');
    $(id).attr('data-information',information);
    $('.projectContainer').animate({top:(projectPosition) * -1 + 'px'},1300);

    $('.list_container').attr('data-information',information);
}

function randomPosition(){

    var h = $('#projectInformationTwo').height() + 500;
    var w = $('#projectInformationTwo').width();

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];
}

function starScroll () {
    var starSmall;
    var starBig;

    for(i=0;i<40;i++) {
        var newPosition = randomPosition();
        starBig = $('<div>').addClass('big_star').css({top:newPosition[0],left: newPosition[1]});
        $('#projectInformationTwo').append(starBig);
        for(x=0;x<20;x++) {
            var newPosition = randomPosition();
            starSmall = $('<div>').addClass('small_star').css({top:newPosition[0],left: newPosition[1]});
            $('#projectInformationTwo').append(starSmall);
        }
    }
}

$(function($){
    var windowWidth = $(window).width();
    var windowHeigth = $(window).height();

    $(window).resize(function() {
        if(windowWidth != $(window).width()){
            location.reload();
            return;
        }
        if(windowHeigth != $(window).height()){
            location.reload();
            return;
        }
    });
});

// function panelCreation() {
//     var panelArray = [];
//     var idCount = 1;
//     for(i=0; i<48; i++) {
//         var id = 'panel' + idCount++;
//         panelArray.push(id);
//     }
//     console.log(panelArray);
//
//     for(i=0; i<4; i++) {
//         var row = $('<div>').addClass('panelRow');
//         $('#projectTwo').append(row);
//         var panel;
//         var new_time = 0;
//         for(j=0; j<12; j++) {
//             new_time += .03;
//             panel = $('<div>').addClass('panel col-md-1 spin').attr('id',panel);
//             panel.css('animation-delay', new_time + 's').addClass('spin');
//             $('.panelRow').append(panel);
//         }
//     }
// }

// function wheatleyToDom () {
//     $('.projectTextContainer').css('z-index','+5');
//     var div = $('<div>').addClass('wheatley_container');
//     var wheatley = $('<img>').addClass('wheatley').attr('src','./images/Wheatley1.png');
//     var pageHeight = $('#projectInformationTwo').height();
//     div.append(wheatley);
//     $('#projectInformationTwo').append(div.css('top', pageHeight));
//     $('.wheatley_container').animate({top:"-=1000",left:"+=2000"},39000, function () {
//         $('.wheatley').remove();
//         $('.wheatley_container').remove();
//         setTimeout(wheatleyToDom,500);
//     });
// }
