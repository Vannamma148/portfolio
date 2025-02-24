(function ($) {
	"use strict";
	/*=============================================
	=              Preloader       =
    =============================================*/
	function preloader() {
		$("#preloader").delay(0).fadeOut();
	}
	/*=============================================
    =     Offcanvas Menu      =
    =============================================*/
	function offcanvasMenu() {
		$(".menu-tigger").on("click", function () {
			$(".offCanvas__info, .offCanvas__overly").addClass("active");
			return false;
		});
		$(".menu-close, .offCanvas__overly").on("click", function () {
			$(".offCanvas__info, .offCanvas__overly").removeClass("active");
		});
	}
	/*=============================================
	=          Data Background      =
    =============================================*/
	function dataBackground() {
		$("[data-background]").each(function () {
			$(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
		});
	}
	/*=============================================
	=           Go to top       =
    =============================================*/
	function progressPageLoad() {
		var progressWrap = document.querySelector(".btn-scroll-top");
		if (progressWrap != null) {
			var progressPath = document.querySelector(".btn-scroll-top path");
			var pathLength = progressPath.getTotalLength();
			var offset = 50;
			progressPath.style.transition = progressPath.style.WebkitTransition = "none";
			progressPath.style.strokeDasharray = pathLength + " " + pathLength;
			progressPath.style.strokeDashoffset = pathLength;
			progressPath.getBoundingClientRect();
			progressPath.style.transition = progressPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";
			window.addEventListener("scroll", function (event) {
				var scroll = document.body.scrollTop || document.documentElement.scrollTop;
				var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
				var progress = pathLength - (scroll * pathLength) / height;
				progressPath.style.strokeDashoffset = progress;
				var scrollElementPos = document.body.scrollTop || document.documentElement.scrollTop;
				if (scrollElementPos >= offset) {
					progressWrap.classList.add("active-progress");
				} else {
					progressWrap.classList.remove("active-progress");
				}
			});
			progressWrap.addEventListener("click", function (e) {
				e.preventDefault();
				window.scroll({
					top: 0,
					left: 0,
					behavior: "smooth",
				});
			});
		}
	}
	/*=============================================
	=           menu       =
    =============================================*/
	function menuMobi() {
		if ($(".tcmenu__wrap li.menu-item-has-children ul").length) {
			$(".tcmenu__wrap .navigation li.menu-item-has-children").append('<div class="dropdown-btn"><span class="plus-line"></span></div>');
		}
		//Mobile Nav Hide Show
		if ($(".tcmobile__menu").length) {
			var mobileMenuContent = $(".tcmenu__wrap .tcmenu__main-menu").html();
			$(".tcmobile__menu .tcmobile__menu-box .tcmobile__menu-outer").append(mobileMenuContent);
			//Dropdown Button
			$(".tcmobile__menu li.menu-item-has-children .dropdown-btn").on("click", function () {
				$(this).toggleClass("open");
				$(this).prev("ul").slideToggle(300);
			});
			//Menu Toggle Btn
			$(".mobile-nav-toggler").on("click", function () {
				$("body").addClass("mobile-menu-visible");
			});
			//Menu Toggle Btn
			$(".tcmobile__menu-backdrop, .tcmobile__menu .close-btn").on("click", function () {
				$("body").removeClass("mobile-menu-visible");
			});
		}
	}
	/*=============================================
	=           Aos Active       =
    =============================================*/
	function aosAnimation() {
		AOS.init({
			duration: 1000,
			mirror: true,
			once: true,
			disable: "mobile",
		});
	}
	/*=============================================
	=           counterState       =
    =============================================*/
	function counterState() {
		var counters = document.querySelectorAll(".counter");
		counters.forEach(function (counter) {
			var countTo = counter.getAttribute("data-count");
			var countNum = parseInt(counter.textContent);
			var duration = 4000;
			var stepDuration = duration / Math.abs(countTo - countNum);
			var increment = countTo > countNum ? 1 : -1;
			var timer = setInterval(function () {
				countNum += increment;
				counter.textContent = countNum;
				if (countNum == countTo) {
					clearInterval(timer);
					//alert('finished');
				}
			}, stepDuration);
		});
	}
	/*=============================================
	=    		Magnific Popup		      =
    =============================================*/
	function magnificPopup() {
		$(".popup-image").magnificPopup({
			type: "image",
			gallery: {
				enabled: true,
			},
		});
		/* magnificPopup video view */
		$(".popup-video").magnificPopup({
			type: "iframe",
		});
	}
	/*=============================================
	=    		 Wow Active  	         =
    =============================================*/
	function wowAnimation() {
		var wow = new WOW({
			boxClass: "wow",
			animateClass: "animated",
			offset: 0,
			mobile: false,
			live: true,
		});
		wow.init();
	}
	/*=============================================
	=           Masonary Active       =
    =============================================*/
	function masonryFillter() {
		$(".masonary-active").imagesLoaded(function () {
			var $filter = ".masonary-active",
				$filterItem = ".filter-item",
				$filterMenu = ".filter-menu-active";

			if ($($filter).length > 0) {
				var $grid = $($filter).isotope({
					itemSelector: $filterItem,
					filter: "*",
					masonry: {
						// use outer width of grid-sizer for columnWidth
						columnWidth: 1,
					},
				});

				// filter items on button click
				$($filterMenu).on("click", "button", function () {
					var filterValue = $(this).attr("data-filter");
					$grid.isotope({
						filter: filterValue,
					});
				});

				// Menu Active Class
				$($filterMenu).on("click", "button", function (event) {
					event.preventDefault();
					$(this).addClass("active");
					$(this).siblings(".active").removeClass("active");
				});
			}
		});
	}
	function customSwiper() {
		const slider1Thumb = new Swiper(".slider-1-thumb", {
			loop: true,
			spaceBetween: 10,
			slidesPerView: 3,
			freeMode: true,
			watchSlidesProgress: true,
			// centeredSlides: true,
		});
		const slider1 = new Swiper(".slider-1", {
			spaceBetween: 10,
			loop: true,
			thumbs: {
				swiper: slider1Thumb,
			},
		});

		const sliderson = new Swiper(".slider-son", {
			loop: true,
			spaceBetween: 10,
			slidesPerView: 3,
			freeMode: true,
			watchSlidesProgress: true,
		});
		const slider2 = new Swiper(".slider-2", {
			slidesPerView: 4,
			spaceBetween: 30,
			slidesPerGroup: 1,
			centeredSlides: false,
			loop: true,
			autoplay: {
				delay: 4000,
			},
			breakpoints: {
				1200: {
					slidesPerView: 4,
				},
				992: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 2,
				},
				576: {
					slidesPerView: 1,
				},
				0: {
					slidesPerView: 1,
				},
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		});
		const slider3 = new Swiper(".slider-3", {
			slidesPerView: 3,
			// slidesPerGroup: 3,
			spaceBetween: 80,
			centeredSlides: true,
			loop: true,
			autoplay: {
				delay: 4000,
			},
			pagination: {
				el: ".swiper-pagination",
			},
			breakpoints: {
				1200: {
					slidesPerView: 3,
				},
				992: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 2,
				},
				576: {
					slidesPerView: 1,
				},
				0: {
					slidesPerView: 1,
				},
			},
		});
		const slider4 = new Swiper(".slider-4", {
			slidesPerView: 4,
			spaceBetween: 65,
			freeMode: true,
			centeredSlides: true,
			loop: true,
			autoplay: {
				delay: 4000,
			},
		});
		const slider5 = new Swiper(".slider-5", {
			slidesPerView: 2,
			spaceBetween: 40,
			loop: true,
			autoplay: {
				delay: 3000,
			},
			breakpoints: {
				1200: {
					slidesPerView: 2,
					spaceBetween: 40,
				},
				992: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				576: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				0: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			scrollbar: {
				el: ".swiper-scrollbar",
				hide: false,
			},
			on: {
				afterInit: function () {
					// set padding left slide
					var leftPadding = 0;
					var swipperRoot = $(".swipper-root");
					if (swipperRoot.length > 0) {
						leftPadding = swipperRoot.offset().left;
					}
					if ($(".box-swiper-padding").length > 0) {
						$(".box-swiper-padding").css("padding-left", leftPadding + "px");
					}
				},
			},
		});

		const slider6 = new Swiper(".slider-6", {
			slidesPerView: 1,
			loop: true,
			autoplay: {
				delay: 4000,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		});
	}
	function carauselScroll() {
		$("#carouselTicker-left").each(function () {
			$(this).carouselTicker({
				direction: "prev",
				speed: 1,
				delay: 30,
			});
		});
		$("#carouselTicker-right").each(function () {
			$(this).carouselTicker({
				direction: "next",
				speed: 1,
				delay: 30,
			});
		});
	}

	function selectBudget() {
		$(".select-budget a").click(function () {
			$(".select-budget a").removeClass("active shadow");
			$(this).addClass("active shadow");
		});
	}

	function odometerCounter() {
		if ($(".odometer").length > 0) {
			$(".odometer").appear(function (e) {
				var odo = $(".odometer");
				odo.each(function () {
					var countNumber = $(this).attr("data-count");
					$(this).html(countNumber);
				});
			});
		}
	}

	function toolTips() {
		const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
		const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
	}

	/*=============================================
	=           Page Load       =
    =============================================*/
	$(window).on("load", function () {
		preloader();
		menuMobi();
		progressPageLoad();
		offcanvasMenu();
		dataBackground();
		aosAnimation();
		counterState();
		customSwiper();
		magnificPopup();
		wowAnimation();
		carauselScroll();
		selectBudget();
		odometerCounter();
		toolTips();
		masonryFillter();
	});
})(jQuery);
