"use strict";$(function(){if(!Modernizr.touch){var a=$(".fade-in-on-scroll");a.each(function(a,b){$(b).addClass("fade-out")}),$(document).scroll(function(){var b=$(window).height(),c=$(document).scrollTop(),d=c+.85*b,e=$(".header-content").position().top;$(".header-content").toggleClass("fade-out",c-.2*b>e),a.each(function(a,b){d>$(b).position().top&&$(b).removeClass("fade-out")})})}});