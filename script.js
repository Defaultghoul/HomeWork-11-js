// 1

let time = 60;

let timerId = setInterval(() => {
	time--;
	console.log(`Залишилось: ${time}хв.`);

	if (time == 30) {
		alert('Залишилось менше половини часу.');
	}

	if (time == 0) {
		clearInterval(timerId);
		alert('Час закінчився!');
	}
}, time * 1000);

// 2

let timeLeft = 30000;
const timerDisplay = document.querySelector('.displayTimer');
const startButton = document.querySelector('.startTimer');

const startTimer = () => {
	timeLeft = 30000;
	startButton.disabled = true;
	let timer = setInterval(() => {
		timeLeft -= 10;
		timerDisplay.textContent = timeLeft / 1000;

		if (timeLeft <= 10000) {
			timerDisplay.style.color = 'red';
		} else {
			timerDisplay.style.color = 'black';
		}
		if (timeLeft === 0) {
			clearInterval(timer);
			startButton.disabled = false;
			timerDisplay.textContent = 'Час закінчився!';
		}
	}, 10);
};
