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
            starScroll(id);
        },710);
    });

    $('.closer').on('click', function () {
        var info = $(this).attr('data-project');
        var id = '#' + info;
        var projectPosition = $(id).position().top;
        $('.projectTextContainer').css('display','none');
        $('.small_star').remove();
        $('.big_star').remove();
        $(this).addClass('spin_short');
        $('.projectContainer').animate({top:(projectPosition) * -1 + 'px'},1300, function () {
            $('.list_container').css('display','block');
            $('.projectInformation').css({height:'0', width: '100%'});
            $('.closer').removeClass('spin_short')
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
    $(element).addClass('selectProject');
    $(id).attr('data-information',information);
    $('.projectContainer').animate({top:(projectPosition) * -1 + 'px'},1300);

    $('.list_container').attr('data-information',information);
}

function randomPosition(id){

    var h = $(id).height() + 500;
    var w = $(id).width();

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];
}

function starScroll (id) {
    var starSmall;
    var starBig;

    for(i=0;i<40;i++) {
        var newPosition = randomPosition(id);
        starBig = $('<div>').addClass('big_star').css({top:newPosition[0],left: newPosition[1]});
        $(id).append(starBig);
        for(x=0;x<20;x++) {
            var newPosition = randomPosition(id);
            starSmall = $('<div>').addClass('small_star').css({top:newPosition[0],left: newPosition[1]});
            $(id).append(starSmall);
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
