$.ajax({
  url: 'data/routes.json',
  dataType: 'json',
  type: 'GET',
  error: function() {
    alert('Ocurrio un problema');
  },
  success: function(data) {
    $routes_container = $( '#gallery' );
    $.each(data, function( index, value ) {
      $route = '<div class="col-sm-2 col-md-4 col-lg-4">' +
              '<article>' +
              '<div class="article-image">' +
              '<img src="' + value.thumb + '" alt="route-' + index + '">' +
              '</div>' +
              '<div class="article-header">' +
              '<h5>' + value.route + '</h5>' +
              '<h6>' + value.description + '</h6>' +
              '</div>' +
              '</article>' +
              '</div>';

      $routes_container.append($route);
    });
  }
});
