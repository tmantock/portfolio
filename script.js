$(document).ready(function (){
    
});

function pageScroll (element) {
    var project = $(element).attr('data-project');
    var id = '#' + project;
    var projectPosition = $(id).position().top;
    
    $('.projectContainer').animate({top:(projectPosition) * -1 + 'px'},1000);
}