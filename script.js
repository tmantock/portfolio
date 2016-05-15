$(document).ready(function (){
    
});

function pageScroll (element) {
    var project = $(element).attr('data-project');
    var listItem = $('.projectTitle');
    var id = '#' + project;
    var projectPosition = $(id).position().top;

    if(listItem.hasClass('selectProject')) {
        listItem.removeClass('selectProject');
    }
    
    $(element).addClass('selectProject');
    
    $('.projectContainer').animate({top:(projectPosition) * -1 + 'px'},1300);
}