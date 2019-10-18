$(document).ready(function() {
  var movies = [
    { id: 1, title: "Halloween III", rating: "PG13"},
    { id: 2, title: "I'll Always Know What You Did Last Summer", rating: "PG13"},
    { id: 3, title: "Hereditary", rating: "R"}
  ];

  var moviesHTMLString = "";

  movies.forEach(function(movie) {
    moviesHTMLString += `<h1>${movie.title}</h1>`;
    moviesHTMLString += `<h5>Rating: ${movie.rating}</h5>`;
  });

  $(".movies").html(moviesHTMLString);

  $("h1").on("mousemove", function(event) {
    $("#x-coordiante").html(event.clientX);
    $("#y-coordiante").html(event.clientY);
  });

  $("p").on("click", function() {
    alert("Do do that!!");
  });

  $(".message").html("My Stuff");

});
