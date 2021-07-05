/*jsLint plusplus: true, evil: true */
/*global console, alert, prompt */

var countDownDate = new Date("25 Dec, 2021 16:37:52").getTime();


var myfunc = setInterval(function () {
	"use strict";
    var now = new Date().getTime(),
		timeleft = countDownDate - now,


	    days = Math.floor(timeleft / (1000 * 60 * 60 * 24)),
		//var hours = Math.floor(days / (1000 * 60 * 60));
	    hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
	    minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)),
		seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
	
	document.getElementById("days").innerHTML = days;
	document.getElementById("hours").innerHTML = hours;
	document.getElementById("minutes").innerHTML = minutes;
	document.getElementById("seconds").innerHTML = seconds;
	
	
	
}, 1000);


setInterval(function () {
	"use strict";
	 //play audio
	document.querySelector(".sound").play();
	
}, 2000);

