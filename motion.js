var characters = new Array(3);

characters[0] = document.getElementById("hours1");
characters[1] = document.getElementById("minutes1");
characters[2] = document.getElementById("seconds1");
characters[3] = document.getElementById("curr_time");

hour=0;
min=0;
sec=0;
runClock();
//For every 33ms (about 30fps)
setInterval(runClock,1000);

function runClock(){
	
    var d = new Date();

	hour = d.getHours()*30;
	min = d.getMinutes()*6;
	sec = d.getSeconds()*6;

	hr = hour+"deg";
	minut = min + "deg";
	secs = sec + "deg";

	characters[0].style.transform  = "rotate("+hr+")"; 
	characters[1].style.transform  = "rotate("+minut+")"; 
	characters[2].style.transform  = "rotate("+secs+")"; 

	characters[3].innerHTML  = d.getHours()+" : "+ d.getMinutes() +" : "+d.getSeconds();
}