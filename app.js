const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

document.addEventListener("DOMContentLoaded", function () {
	const fadeElements = document.querySelectorAll('.fade-in');

	function fadeIn() {
		fadeElements.forEach(element => {
			const elementTop = element.getBoundingClientRect().top;
			const elementBottom = element.getBoundingClientRect().bottom;

			if (elementTop < window.innerHeight * 0.9 && elementBottom >= 0) {
				element.classList.add('visible');
			} else {
				element.classList.remove('visible');
			}
		});
	}

	// Panggil fungsi fadeIn dengan delay 2 detik setelah halaman dimuat
	setTimeout(function () {
		fadeIn();
	}, 2000);

	// Panggil fungsi fadeIn saat di-scroll
	window.addEventListener('scroll', fadeIn);
});


document.addEventListener("DOMContentLoaded", function () {
	const audio = document.getElementById("audio");
	const audioControl = document.getElementById("audio-control");

	function toggleAudio() {
		if (audio.paused) {
			audio.play();
		} else {
			audio.pause();
		}
	}

	audioControl.addEventListener("click", toggleAudio);
});






