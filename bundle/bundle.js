/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	$('.modal_bg').hide();

	$(".hero_button").click(function () {
	    $('html, body').animate({
	        scrollTop: $(".study_one").offset().top
	    }, 1000, "swing");
	});

	$('.exit_modal').click(function () {
	    $('.modal_bg').fadeOut();
	});

	$('.cta_button').click(function () {
	    $('.modal_bg').fadeIn();
	});

	$("#smm_button").on('click', function () {
	    $('html, body').animate({
	        scrollTop: $(".study_one").offset().top
	    }, 1000, "swing");
	    console.log('hey');
	});

	$("#growth_button").click(function () {
	    $('html, body').animate({
	        scrollTop: $(".study_two").offset().top
	    }, 1000, "swing");
	});

	$("#marketing_button").click(function () {
	    $('html, body').animate({
	        scrollTop: $(".study_three").offset().top
	    }, 1000, "swing");
	});

	//contact form handler

	var form_name = "";
	var form_email = "";
	var form_phone = "";
	var form_business = "";

	$("#contact_form_submit").on("click", function () {
	    form_name = $("#contact_name").val();
	    form_email = $("#contact_email").val();
	    form_phone = $("#contact_phone").val();
	    form_business = $("#contact_business").val();
	    $.ajax({
	        url: "//formspree.io/jordan@aruza.co",
	        method: "POST",
	        data: {
	            name: form_name,
	            email: form_email,
	            phone: form_phone,
	            business_name: form_business
	        },
	        dataType: "json",
	        success: function success(msg) {
	            $('#contact_form').fadeOut();
	            $('#error_message').fadeOut();
	            $('#form_thank_you').fadeIn();
	        },
	        error: function error(xhr, ajaxOptions, thrownError) {
	            console.log(xhr.status);
	            console.log(xhr.responseText);
	            console.log(thrownError);
	            $('#error_message').fadeIn();
	        }
	    });
	    return false;
	});

/***/ }
/******/ ]);