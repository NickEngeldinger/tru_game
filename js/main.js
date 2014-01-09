window.onload = function() {
	//Fade In
	document.documentElement.className += ' loaded';

	var
		frontCover = document.getElementByClassName('front');

	frontCover.onclick = albumActive;

	var albumAction = function() {
		frontCover.classList.add('spin-album');
	};

};