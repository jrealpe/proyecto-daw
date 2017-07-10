$(window).scroll(function (event) {
  $scroll = $(window).scrollTop();

  $menu = $('header nav').first();
  if ($scroll <= 3) {
    $menu.removeClass('menu-active');
  } else {
    $menu.addClass('menu-active');
  }

});
