// Countdown Timer for coming Ramadan

// Contributors
//  Haji Ahmed 2k19/CSM/29 
//  Sheeraz Ali 2k19/CSM/82
//  Shaharyar Khan 2k19/CSM/80


 const daysEl = document.getElementById('days');
 const hoursEl = document.getElementById('hours');
 const minsEl = document.getElementById('mins');
 const secondsEl = document.getElementById('seconds');

 const nextYear = "1 April 2022";

function countdown(){
	const nextYearsDate = new Date(nextYear);
	const currentDate = new Date();

	const totalSeconds = (nextYearsDate - currentDate) / 1000;

	const days = Math.floor(totalSeconds / 3600 / 24);
	const hours = Math.floor(totalSeconds / 3600) % 24;
	const mins = Math.floor(totalSeconds / 60 ) % 60;
	const seconds = Math.floor(totalSeconds) % 60;

	daysEl.innerHTML = days;
	hoursEl.innerHTML = hours;
	minsEl.innerHTML = mins;
	secondsEl.innerHTML = seconds;

}


//initial call
countdown();

setInterval(countdown, 1000);

