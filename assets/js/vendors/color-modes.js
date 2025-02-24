"use strict";

document.addEventListener("DOMContentLoaded", function () {
	var darkLightSwitcher = document.querySelector(".dark-light-switcher");
	var darkIcon = darkLightSwitcher.querySelector(".bi-sun-fill");
	var lightIcon = darkLightSwitcher.querySelector(".bi-moon-stars-fill");
	var storedTheme = localStorage.getItem("theme");
	var isDarkMode = storedTheme === "dark";

	if (isDarkMode) {
		lightIcon.style.display = "none";
		darkIcon.style.display = "block";
		document.documentElement.setAttribute("data-bs-theme", "dark");
	} else {
		lightIcon.style.display = "block";
		darkIcon.style.display = "none";
		document.documentElement.setAttribute("data-bs-theme", "light");
	}

	darkLightSwitcher.addEventListener("click", function () {
		var storedTheme = localStorage.getItem("theme");
		var isDarkMode = storedTheme === "dark";

		if (isDarkMode) {
			lightIcon.style.display = "block";
			darkIcon.style.display = "none";
			document.documentElement.setAttribute("data-bs-theme", "light");
			localStorage.setItem("theme", "light");
		} else {
			lightIcon.style.display = "none";
			darkIcon.style.display = "block";
			document.documentElement.setAttribute("data-bs-theme", "dark");
			localStorage.setItem("theme", "dark");
		}
	});
});
