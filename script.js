var arrowClick = true;

$(document).ready(function (){
    $('.projectImageContainer').on('click', function () {
        var info = $(this).attr('data-information');
        var id = '#' + info;
        $(id).css({height: '100%', width: '100%'});
        $('.list_container').css('display','none');
        var infoPosition =  $(id).position().top;
        $('.projectContainer').animate({top:(infoPosition) * -1 +'px'},700, function () {
            $('.btn.btn-fab, .input-group-btn .btn.btn-fab').css('display','block');
            $('.projectInformationContainer').css('display','block');
        });
        setTimeout(function () {
            starScroll(id);
        },710);
    });

    $('.btn.btn-fab, .input-group-btn .btn.btn-fab').on('click', function () {
        var info = $(this).attr('data-project');
        var id = '#' + info;
        var projectPosition = $(id).position().top;
        $('.projectInformationContainer').css('display','none');
        $('.small_star').remove();
        $('.big_star').remove();
        $('.projectContainer').animate({top:(projectPosition) * -1 + 'px'},1300, function () {
            $('.list_container').css('display','block');
            $('.projectInformation').css({height:'0', width: '100%'});
            $('.btn.btn-fab, .input-group-btn .btn.btn-fab').css('display','none')
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

function listUp (element) {
    var position = $(element).attr('data-position');
    if (position == '1') {
        return;
    }
    if (arrowClick === true) {

        arrowClick = false;

        var upCount = parseInt(position);
        upCount--;
        var prevChild = '.project_list div:nth-child(' + upCount + ')';
        var downCount = upCount + 1;
        var target = $('.selectProject');
        var height = target.height();
        var listPosition = $('.project_list').position().top;
        $('.selectProject').addClass('projectTitle').removeClass('selectProject');
        $('.project_list').animate({top: (height + listPosition) + downCount * 2 + 'px'}, 300, function () {
            $(prevChild).addClass('selectProject').removeClass('projectTitle');
            $(element).attr('data-position', upCount);
            $('.downArrow').attr('data-position', downCount);
            arrowClick = true;
        });
        $('.selectProject').addClass('projectTitle').removeClass('selectProject');

    }

}

function listDown (element) {
    var position = $(element).attr('data-position');
    if(position == '6') {
        return;
    }
    if (arrowClick === true) {

        arrowClick = false;

        var downCount = parseInt(position);
        var nextChild = '.project_list div:nth-child(' + downCount + ')';
        downCount++;
        var upCount = downCount - 1;
        var target = $('.selectProject');
        var height = target.height();
        var listPosition = $('.project_list').position().top;
        $('.project_list').animate({top:(height * -1) + listPosition - upCount * 2 + 'px'},300,function(){
            $(nextChild).addClass('selectProject').removeClass('projectTitle');
            $(element).attr('data-position',downCount);
            $('.upArrow').attr('data-position',upCount);
            arrowClick = true;
        });
        $('.selectProject').addClass('projectTitle').removeClass('selectProject');

    }
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
