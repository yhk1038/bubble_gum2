// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


///// Floating div ///////////////
// $(document).ready(function(){
//     $('.a').each(function(){ animateDiv($(this)); });
// });
//
// function makeNewPosition(){
//     var h = $(window).height() - 50;
//     var w = $(window).width() - 50;
//     var nh = Math.floor(Math.random() * h);
//     var nw = Math.floor(Math.random() * w);
//     return [nh,nw];
// }
//
// function animateDiv(ele){
//     var newq = makeNewPosition();
//     var oldq = ele.offset();
//     var speed = calcSpeed([oldq.top, oldq.left], newq);
//     ele.animate({ top: newq[0], left: newq[1] }, speed, function(){
//       animateDiv(ele);
//     });
// };
//
// function calcSpeed(prev, next) {
//     var x = Math.abs(prev[1] - next[1]);
//     var y = Math.abs(prev[0] - next[0]);
//     var greatest = x > y ? x : y;
//     var speedModifier = 0.05;
//     var speed = Math.ceil(greatest/speedModifier);
//     return speed;
// }



//// Draged TEXT /////////////
function selectText() {
  var selectionText = "";
  if (document.getSelection) {
    selectionText = document.getSelection();
  } else if (document.selection) {
    selectionText = document.selection.createRange().text;
  }
  return selectionText;
}

document.onmouseup = function() {
  var selectedText = '';
  var getSelectText = '';
  getSelectText = selectText();

  if (getSelectText != ""){
    $("#button_form").fadeIn('fast');
  }
  if (getSelectText == "") {
    $("#button_form").fadeOut('fast');
  }


  if(getSelectText != '') {
  	selectedText = getSelectText;
  } else {
	  return;
  }
  document.getElementById("myModalLabel1").innerHTML = selectedText;
  document.getElementById("myModalLabel2").innerHTML = selectedText;
  document.getElementById("myModalLabel3").innerHTML = selectedText;
  document.getElementById("myModalLabel4").innerHTML = selectedText;

  document.getElementById("locationText1").innerHTML = selectedText;
  document.getElementById("locationText2").innerHTML = selectedText;
  document.getElementById("locationText3").innerHTML = selectedText;
  document.getElementById("locationText4").innerHTML = selectedText;
}
