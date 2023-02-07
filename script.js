const header = document.querySelector(".arrow-up");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("active", window.scrollY > 0);
});

const menuIcon = document.querySelector(".bx-menu");
const menus = document.querySelector(".menus");

menuIcon.addEventListener("click", () =>{
	menuIcon.classList.toggle("bx-x");
	menus.classList.toggle("open");
})


window.addEventListener("scroll", () =>{
	menuIcon.classList.remove("bx-x");
	menus.classList.remove("open");
})