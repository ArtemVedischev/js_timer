var timerSecond = 0;
var timerMinutes = 0;
var result = 0;
var timerID;
var addNull = '0';
function startTimer() {
	timerID = setInterval(function() {
		if (timerSecond < 59) {
			timerSecond += 1;
		} else {
			timerSecond = 0;
			timerMinutes += 1;
		}
		console.log(timerSecond+'   '+timerMinutes);
		if (timerSecond < 10 ) {
			document.getElementById('second').innerHTML = addNull + timerSecond;	
		} else {
			document.getElementById('second').innerHTML = timerSecond;
		}
		if (timerMinutes < 10) {
			document.getElementById('minutes').innerHTML = addNull + timerMinutes;
		} else {
			document.getElementById('minutes').innerHTML = timerMinutes;
		}
		
	}, 1000);
}
function pauseTimer() {
	clearInterval(timerID);
}
function stopTimer() {
	pauseTimer();
	timerSecond = timerMinutes = 0;
}