/*---------------------------------------------
Template name: .
Version: 1.0.0

[Table of Content]
----------------------
01: Preloader
02: Mixit UP
03: Lity
04: Swiper Slider
05: Back to Top
06: back to top button animate
----------------------------------------------*/

(function ($) {
	"use strict";

	/* ======= STICKY MENU ======= */
	$(window).on('scroll', function () {
		if ($(window).scrollTop()) {
			$("nav").addClass('sticky-menu');
		} else {
			$("nav").removeClass('sticky-menu');
		}
	});

	/* ====== SHOW & HIDE MENU ====== */
	$(".menu-toggle-btn").click(function () {
		$(".main-menu").addClass("show-menu");
	});
	$(".menu-close-icon").click(function () {
		$(".main-menu").removeClass("show-menu");
	});

	/* ===== Logo Bar Slider ===== */
	$('.logo-bar-slider').slick({
		slidesToShow: 3,
		infinite: true,
		speed: 1500,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		dots: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			}
		]
	});

	/* ===== Coach Slider ===== */
	$('.coach-slider').slick({
		centerMode: true,
		slidesToShow: 3,
		infinite: false,
		speed: 1500,
		autoplay: false,
		autoplaySpeed: 2000,
		arrows: false,
		dots: false,
		responsive: [{
				breakpoint: 768,
				settings: {
					centerPadding: '120px',
					slidesToShow: 1,
					autoplay: true,
					infinite: true,
				}
			},
			{
				breakpoint: 511,
				settings: {
					centerPadding: '120px',
					slidesToShow: 1,
					autoplay: true,
					infinite: true,
				}
			},
			{
				breakpoint: 475,
				settings: {
					centerPadding: '110px',
					slidesToShow: 1,
					autoplay: true,
					infinite: true,
				}
			},

			{
				breakpoint: 430,
				settings: {
					centerPadding: '90px',
					slidesToShow: 1,
					autoplay: true,
					infinite: true,
				}
			},
			{
				breakpoint: 375,
				settings: {
					centerPadding: '80px',
					slidesToShow: 1,
					autoplay: true,
					infinite: true,
				}
			},
			{
				breakpoint: 350,
				settings: {
					centerPadding: '60px',
					slidesToShow: 1,
					autoplay: true,
					infinite: true,
				}
			},
		]
	});

	/* ===== Field Slider ===== */
	$('.field-slider').slick({
		centerMode: true,
		centerPadding: '140px',
		slidesToShow: 3,
		infinite: true,
		speed: 1500,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		dots: false,
		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 1,
					centerPadding: '200px',
				}
			},
		]
	});

	/* ===== Reviews Slider ===== */
	$('.reviews-slider').slick({
		centerMode: true,
		centerPadding: '140px',
		slidesToShow: 3,
		infinite: true,
		speed: 1500,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		dots: false,
		responsive: [{
				breakpoint: 1200,
				settings: {
					centerPadding: '140px',
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 950,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: 650,
				settings: {
					centerPadding: '100px',
					slidesToShow: 1
				}
			},
			{
				breakpoint: 576,
				settings: {
					centerPadding: '80px',
					slidesToShow: 1
				}
			},
			{
				breakpoint: 500,
				settings: {
					centerPadding: '60px',
					slidesToShow: 1
				}
			},
			{
				breakpoint: 450,
				settings: {
					centerPadding: '40px',
					slidesToShow: 1
				}
			}
		]
	});

	/* ===== PARALLAX EFFECT ===== */
	$('.parallaxie').parallaxie({
		speed: 0.5,
		offset: 50,
	});
	
	/* ===== AOS JS ===== */
	AOS.init();

})(jQuery);