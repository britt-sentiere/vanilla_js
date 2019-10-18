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

  var moviesTag = document.querySelector(".movies");
  moviesTag.innerHTML = moviesHTMLString;
  console.log(moviesTag);


// function doSomething() {
//   console.log("This message will self destruct!");
// }

function showCoords (event) {
  console.log("X: ", event.clientX, "Y: ", event.clientY);
}

var xTag = document.querySelector("#x-coordinate");
xTag.innerHTML = "event.clientX"

var yTag = document.querySelector("#y-coordinate");
yTag.innerHTML = "event.clientY"

function sayHello() {
  console.log("Hello!")
}


var messageTag = document.querySelector(".message")
messageTag.innerHTML = "Hola";

var messageTag = document.querySelector(".messageTwo")
messageTag.innerHTML = "Bonjour";

var messageTag = document.querySelector(".messageThree")
messageTag.innerHTML = "Greetings";