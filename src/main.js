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

// document.querySelectorAll(".card").forEach((el) => {
// 	el.onmousemove = (e) => {
// 		const rect = el.getBoundingClientRect();
// 		const x = (e.clientX - rect.left - rect.width / 2) / 20;
// 		const y = (e.clientY - rect.top - rect.height / 2) / 20;
// 		el.style.setProperty("--x", `${y}deg`);
// 		el.style.setProperty("--y", `${-x}deg`);
// 	};
// 	el.onmouseleave = () => {
// 		el.style.setProperty("--x", "0deg");
// 		el.style.setProperty("--y", "0deg");
// 	};
// });
