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

    for(i=0;i<45;i++) {
        var newPosition = randomPosition();
        starBig = $('<div>').addClass('big_star').css({top:newPosition[0],left: newPosition[1]});
        $('#projectInformationTwo').append(starBig);
        for(x=0;x<30;x++) {
            var newPosition = randomPosition();
            starSmall = $('<div>').addClass('small_star').css({top:newPosition[0],left: newPosition[1]});
            $('#projectInformationTwo').append(starSmall);
        }
    }
}
