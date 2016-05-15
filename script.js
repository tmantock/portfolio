$(document).ready(function (){
    
});

function pageScroll (element) {
    var navPosition = $('#navbar').position().top;
    var project = $(element).attr('data-project');
    var id = '#' + project;
    var projectPosition = $(id).position().top;
    
    $(id).animate({top:(navPosition + projectPosition) * -1 + 'px'},1000);
}