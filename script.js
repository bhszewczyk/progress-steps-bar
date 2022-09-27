const progressBar = document.getElementById('progress');
const progressSteps = document.querySelectorAll('.circle');
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');

let currentStep = 1;

next.addEventListener('click', () => {
	currentStep += 1;

	if (currentStep > progressSteps.length) {
		currentStep = progressSteps.length;
	}

	updateProgressBar();
	toggleBtns();
});

prev.addEventListener('click', () => {
	currentStep -= 1;

	if (currentStep < 1) {
		currentStep = 1;
	}

	updateProgressBar();
	toggleBtns();
});

function updateProgressBar() {
	progressSteps.forEach((step, i) => {
		console.log(i, currentStep);
		if (i < currentStep) {
			step.classList.add('active');
		} else {
			step.classList.remove('active');
		}
	});

	const progress = (currentStep - 1) / (progressSteps.length - 1);

	console.log(progress);
	progressBar.style.width = progress * 100 + '%';
}

function toggleBtns() {
	if (currentStep === 1) {
		prev.disabled = true;
	} else {
		prev.disabled = false;
	}

	if (currentStep === progressSteps.length) {
		next.disabled = true;
	} else {
		next.disabled = false;
	}
}
