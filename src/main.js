import "./style.css";
import "remixicon/fonts/remixicon.css";
import "vanilla-tilt/dist/vanilla-tilt.min.js";

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
	menu.classList.toggle("top-40");
});
const dot = document.getElementById("cursor-dot");

window.addEventListener("mousemove", (e) => {
	// Check if cursor is at (0,0)
	if (e.clientX === 0 && e.clientY === 0) {
		dot.style.opacity = "0"; // hide
	} else {
		dot.style.opacity = "1"; // show
		dot.style.transform = `translate(${e.clientX - 6}px, ${
			e.clientY - 6
		}px)`;
	}
});
