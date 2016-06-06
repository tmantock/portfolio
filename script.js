var arrowClick;
var front_end_array = ["./images/html5.png","./images/css.svg","./images/bootstrap.png","./images/javascript.png","./images/angular.png"];
var back_end_array = ["./images/php.svg","./images/sql.png"];
var dev_tools_array = ["./images/octocat.png"];
//var site_array = ["http://dev.tevinmantock.com/decider","http://dev.tevinmantock.com/memory_match","http://dev.tevinmantock.com/moments","http://dev.tevinmantock.com/calculator","http://dev.tevinmantock.com/SGT"];
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function pageScroll (project,time) {
    var projectPosition = project.position().top;
    $('.projectContainer').animate({top:(projectPosition) * -1 + 'px'},time,function () {
        $('.projectTitle').show();
        arrowClick = true;
    });
}

function listUp (element) {
    $('.projectTitle').hide(300);
    var position = $(element).attr('data-position');
    if (position == '1') {
        var sub_project = $('#project5');
        pageScroll(sub_project,1200);
        $('.upArrow').attr('data-position',5);
        $('.downArrow').attr('data-position',6);
        return;
    }
    if (arrowClick === true) {

        arrowClick = false;

        var upCount = parseInt(position);
        upCount--;
        var project = $('#project'+upCount);
        pageScroll(project,1000);
        var downCount = upCount + 1;
        $(element).attr('data-position', upCount);
        $('.downArrow').attr('data-position', downCount);
    }

}

function listDown (element) {
    $('.projectTitle').hide(300);
    var position = $(element).attr('data-position');
    $('.upArrow').css('color','white');
    if(position == '6') {
        var sub_project = $('#project1');
        pageScroll(sub_project,1200);
        $('.upArrow').attr('data-position',1);
        $('.downArrow').attr('data-position',2);
        return;
    }
    if (arrowClick === true) {

        arrowClick = false;

        var downCount = parseInt(position);
        var project = $('#project'+downCount);
        pageScroll(project,1000);
        downCount++;
        var upCount = downCount - 1;
        $(element).attr('data-position',downCount);
        $('.upArrow').attr('data-position',upCount);
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

  if(!isMobile()) {
    var starSmall;
    var starBig;

    for (i = 0; i < 25; i++) {
      var newPosition = randomPosition(id);
      starBig = $('<div>').addClass('big_star').css({top: newPosition[0], left: newPosition[1]});
      $(id).append(starBig);
      for (x = 0; x < 10; x++) {
        var newPosition = randomPosition(id);
        starSmall = $('<div>').addClass('small_star').css({top: newPosition[0], left: newPosition[1]});
        $(id).append(starSmall);
      }
    }
  }
}

function skills_list_to_DOM (array, parent, style) {
  var div = $("<div>").addClass(style);
  var img = array[0];
  var image_tag = $("<img>").attr("src",img);
  div.append(image_tag);
  parent.append(div);
  incrementer = 1;
  for(var i=1; i<array.length; i++){
    div = $("<div>").addClass(style);
    img = array[i];
    image_tag = $("<img>").attr("src",img);
    div.append(image_tag);
    var width = $("." + style + ":last-child").width();
    parent.append(div);
    $("." + style + ":last-child").animate({left:(width * incrementer) + (30 * incrementer++) + "px"},1000);
  }
}

function fontCheck () {
    if(isMobile()) {
        $('.sgt').html('SGT');
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

$(document).ready(function (){
    $('.projectImageContainer').on('click', function () {
        var info = $(this).attr('data-information');
        var arrayPosition = $(this).attr('data-frame');
        var id = '#' + info;
        $(id).css({height: '100%', width: '100%'});
        $('.listBox , .make_web, .projectTitle').css('display','none');
        var infoPosition =  $(id).position().top;
        $('.projectContainer').animate({top:(infoPosition) * -1 +'px'},700, function () {
            $('.projectInformationContainer').css('display','block');
        });
        setTimeout(function () {
            starScroll(id);
        },710);
    });

    $('.closer').on('click', function () {
        var info = $(this).attr('data-project');
        var id = '#' + info;
        //var iframe = $(id + ' iframe');
        var projectPosition = $(id).position().top;
        $('.projectInformationContainer').css('display','none');
        $('.small_star , .big_star').remove();
        $('.projectContainer').animate({top:(projectPosition) * -1 + 'px'},800, function () {
            $('.listBox , .top_make_web, .projectTitle').css('display','block');
            $('.projectInformation').css({height:'0', width: '100%'});
        });
    });

    $('.upArrow').on('click',function (){
        listUp(this);
    });

    $('.downArrow').on('click',function(){
        listDown(this);
    });

    // $(".nav li:first-child").addClass("active");
    //
    // $(".nav a").on("click", function(){
    //   $(".nav").find(".active").removeClass("active");
    //   $(this).parent().addClass("active");
    // });

    isMobile();

    fontCheck();
    starScroll($(".skills-holder"));
    skills_list_to_DOM(front_end_array,$("#front-end"), "front-end-circle");
    skills_list_to_DOM(back_end_array,$("#back-end"), "back-end-circle");
    skills_list_to_DOM(dev_tools_array,$("#dev-tools"), "dev-circle");
    arrowClick = true;
});
