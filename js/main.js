$(window).scroll(function (event) {
  $scroll = $(window).scrollTop();

  $menu = $('header nav').first();
  if ($scroll <= 3) {
    $menu.removeClass('menu-active');
  } else {
    $menu.addClass('menu-active');
  }

});


/* -----------------------------
Slider Testimonial Section
----------------------------- */

$(document).ready(function() {

  'use strict';

  $('.testimonial-slider').bxSlider({
    pagerCustom: '#bx-pager',
    pager: true,
    touchEnabled: true,
    controls: false
  });

});
