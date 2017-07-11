$(document).ready(function () {

  // run ajax now
$.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=43b0dcc3e2c88e289ed5aa44e3070aad')
  .done(function (output) {
    var movie_json = output.results;
    // console.log(movie_json);

for (var i = 0; i < movie_json.length; i++) {
  var image_url = 'https://image.tmdb.org/t/p/w300';
    var $newLi = $('<li>');
    var $newImg = $('<img>');
    var poster_path = movie_json[i].poster_path;
    var $movies = $('.movies');
    $newImg.attr('src', image_url + poster_path);
    $newLi.append($newImg);
    $movies.append($newLi);

}

var $form = $('form');
var firstURL = 'https://api.themoviedb.org/3/search/movie?api_key=43b0dcc3e2c88e289ed5aa44e3070aad&query='
$form.on('click', function (event) {
  // stop the form submission
  // default event
  event.preventDefault();
  $('ul').empty();
  var form_data = $(this).serializeArray()[0].value;
  console.log(form_data);
  var secondURL = form_data;
  var fullURL = firstURL + secondURL;
  console.log(fullURL);

  $.get(fullURL)
    .done(function (output) {
      var result_json = output.results;
      console.log(result_json);

      for (var i = 0; i < result_json.length; i++) {
        var image_url = 'https://image.tmdb.org/t/p/w300';
          var $newLi = $('<li>');
          var $newImg = $('<img>');
          var poster_path = result_json[i].poster_path;
          var $movies = $('.movies');
          $newImg.attr('src', image_url + poster_path);
          $newLi.append($newImg);
          $movies.append($newLi);

      }
    });
});

  });
});
