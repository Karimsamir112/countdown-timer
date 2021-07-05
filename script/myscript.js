var countDownDate = new Date("25 Dec, 2021 16:37:52").getTime();


var myfunc = setInterval(function() {
var now = new Date().getTime();
var timeleft = countDownDate - now;
	
    
var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
//var hours = Math.floor(days / (1000 * 60 * 60));
var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
	
	document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds; 
	
	
	
}, 1000)


setInterval(function(){
	
	 //play audio
	document.querySelector(".sound").play();
	
}, 2000) 

