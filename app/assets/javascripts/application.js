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
