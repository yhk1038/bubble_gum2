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

///////DATE &TIME /////////////////

tday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
tmonth=new Array("01","02","03","04","05","06","07","08","09","10","11","12");

function GetClock(){
  var d=new Date();
  var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getYear();
  if(nyear<1000) nyear+=1900;
  var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds(),ap;

  if(nhour==0){ap="AM";nhour=12;}
  else if(nhour<12){ap="AM";}
  else if(nhour==12){ap="PM";}
  else if(nhour>12){ap="PM";nhour-=12;}

  if(nmin<=9) nmin="0"+nmin;
  if(nsec<=9) nsec="0"+nsec;

  // document.getElementById('clockbox').innerHTML=""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+", "+nyear+" "+nhour+":"+nmin+":"+nsec+ap+"";
  document.getElementById('clockbox').innerHTML=""+nyear+"."+tmonth[nmonth]+"."+ndate+" "+nhour+":"+nmin+":"+nsec+ap+"";

}

window.onload=function(){
GetClock();
setInterval(GetClock,1000);
}




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
}
