var height = $(window).height();
$("#box").css({
  top: height + 10,
  position: 'absolute'
});
function timeAdd(start,stop){
  if(typeof(start)!=='number' && typeof(stop)!=='number' || start === stop){
    return; 
  }
  start++;
  $("#box").text(start);
  setTimeout(function(){timeAdd(start,stop);}, 65);
}

function viewVisible(element){
  var windowHeight = $(window).height();
  var windowTop = $(window).scrollTop();
  var windowBottom = windowHeight - windowTop;
  
  var targetElement = element.offset().top
  
  if(targetElement < windowBottom && targetElement > windowTop){
    timeAdd(0,100);
  }
  else{
    console.log("Not in view");
  }
}

viewVisible($("#box"));
