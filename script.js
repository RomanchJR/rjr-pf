/*jslint browser:true */
/*global $ */

$(document).ready(function () {
	// Variables
	const $body = $('body');
	const $navbar = $('.navbar-default');
	const $offsetY = $navbar.offset().top + 10;
	const $menuButton = $('button.navbar-toggle');
	const $menuIcon = $('.navbar-toggle .glyphicon');
	const $collapsedMenuItem = $('.navbar-collapse.collapse li');
	const $modalBackdropDiv = $('<div class="modal-backdrop fade in"></div>');
	const $scrollButton = $('.scroll');
	const $socialIcon = $('.social');

	// Fixed Nav after scroll
	function scroll() {
		if ($(window).scrollTop() >= $offsetY) {
			$navbar.addClass('menu-fixed').css('background-color', 'rgba(255,254,253,0.97)');
		} else {
			$navbar.removeClass('menu-fixed').css('background-color', 'transparent');
		}
	}
	document.onscroll = scroll;

	// Mobile Menu functions
	function openMenu() {
		$menuIcon.removeClass('glyphicon-menu-hamburger').addClass('glyphicon-remove active');
		$modalBackdropDiv.css('z-index', 900);
		$body.append($modalBackdropDiv);
		if (!$navbar.hasClass('menu-fixed')) {
			$navbar.css('background-color', 'rgba(255,254,253,0.97)');
		}
		// Close menu after clicking modal-backdrop
		$modalBackdropDiv.on('click', function () {
			$('.navbar-toggle').click();
			closeMenu();
		});
	}

	function closeMenu() {
		$menuIcon.removeClass('glyphicon-remove active').addClass('glyphicon-menu-hamburger');
		$modalBackdropDiv.css('z-index', 1025).remove();
		if (!$navbar.hasClass('menu-fixed')) {
			$navbar.css('background-color', 'transparent');
		}
	}

	// Mobile Menu Icon Toggle
	$menuButton.on('click', function () {
		if ($menuIcon.hasClass('glyphicon-menu-hamburger')) {
			openMenu();
			// Close menu after clicking a link
			$collapsedMenuItem.on('click', function () {
				$('.navbar-toggle').click(); // Trigger collapse animation
				closeMenu();
			});
		
