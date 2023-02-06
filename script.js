const header = document.querySelector(".arrow-up");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("active", window.scrollY > 0);
});