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

function coffeeDrinks(){
  var coffee = 2;
  var d = new Date();
  var today = d.getTime();
  var startDate = Date.parse("3/15/16");
  var msecSince = today - startDate;
  var daysSince = (msecSince /(1000*60*60*24));
  var coffeeDrunk = Math.round(daysSince * coffee);
  return coffeeDrunk;
}

function codingHours(){
  var hours = 12;
  var d = new Date();
  var today = d.getTime();
  var startDate = Date.parse("3/15/16");
  var msecSince = today - startDate;
  var daysSince = (msecSince /(1000*60*60*24));
  var codingHours = Math.round((hours * daysSince)/2);
}

viewVisible($("#box"));
