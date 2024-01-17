// When the DOM is fully loaded, this function is executed
document.addEventListener("DOMContentLoaded", function () {
  // Get the DOM elements for rendering film details
  const renderPosterName = document.getElementById("filmPosterName");
  const renderPoster = document.getElementById("FilmPoster");
  const renderRunTime = document.getElementById("FilmRunTime");
  const renderFilmShowTime = document.getElementById("FilmShowTime");
  const renderFilmAvailableTickets = document.getElementById(
    "FilmAvailableTickets"
  );
  const buyingTicket = document.getElementById("BuyTicket");
  // Initialize an empty object for storing film details
  let filmObj = {};

  //declaring end point API for fetching film details
  const film = "http://localhost:3000/films";
  const list = document.getElementById("FilmList");

  //fetching the data from the Endpoint API
  fetch(film)
    .then((Response) => Response.json())
    .then((data) => {
      console.log("success", data);
      filmObj = data[0];
      renderFilmDetails(filmObj);
      displayImage(filmObj.poster);
      data.forEach((element) => {
        renderFilmList(element);
      });
    });
  // Function to render a film item in the film list on the DOM
  function renderFilmList(filmObj) {
    let filmNode = document.createElement("li");
    filmNode.textContent = filmObj.title;
    filmNode.className = "ul-item";
    list.appendChild(filmNode);
    //adding event listener to the film list so as to display film details
    filmNode.addEventListener("click", () => {
      renderFilmDetails(filmObj);
      displayImage(filmObj.poster);
    });
  }
  //Function which displays film details on the frontend
  function renderFilmDetails(filmObj) {
    renderPosterName.textContent = filmObj.title;
    renderRunTime.textContent = filmObj.runtime;
    renderFilmShowTime.textContent = filmObj.showtime;
    renderFilmAvailableTickets.textContent =
      filmObj.capacity - filmObj.tickets_sold;
  }

  //rendering filmposters on the Frontend
  function displayImage(src) {
    const image = document.createElement("img");
    image.src = src;
    image.className = "image-item";
    // Clear the previous image
    renderPoster.innerHTML = "";
    renderPoster.appendChild(image);
  }
  //add event listener to the "Buy Ticket" button
  buyingTicket.addEventListener("click", function () {
    if (filmObj.capacity > filmObj.tickets_sold) {
      filmObj.tickets_sold++;
      renderFilmAvailableTickets.textContent =
        filmObj.capacity - filmObj.tickets_sold;
    } else {
      alert("The showing is sold out!");
    }
  });
});
