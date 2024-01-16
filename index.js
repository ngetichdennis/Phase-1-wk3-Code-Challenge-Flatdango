document.addEventListener("DOMContentLoaded",function(){
const renderPosterName=document.getElementById("filmPosterName")
const renderPoster=document.getElementById("FilmPoster");
const renderRunTime=document.getElementById("FilmRunTime");
const renderFilmShowTime=document.getElementById("FilmShowTime");
const renderFilmAvailableTickets=document.getElementById("FilmAvailableTickets");
const buyingTicket=document.getElementById("BuyTicket");
//declaring end point API to be used globally
const film=" http://localhost:3000/films";
const list=document.getElementById("FilmList")

//fetching the data from the Endpoint API
fetch(film)
.then((Response)=>Response.json())
.then((data)=>{
    console.log("success",data);
    renderFilmDetails(data[0])
    displayImage(data[0])
    data.forEach((element)=>{
        renderFilmList(element);
    })
    data.forEach((element)=>{
        renderImages(element)
    })
    
})
function renderFilmList(filmObj){
    let filmNode=document.createElement("li");
    filmNode.textContent=filmObj.title;
    filmNode.className="ul-item";

    list.appendChild(filmNode);
    //adding event listener to the film list so as to display film details
    filmNode.addEventListener("click",()=>{
        renderFilmDetails(filmObj)
        displayImage(filmObj.poster);
    })

}
function renderFilmDetails(filmObj){
    renderPosterName.textContent=filmObj.title;
    renderRunTime.textContent=filmObj.runtime;
    renderFilmShowTime.textContent=filmObj.showtime;
    renderFilmAvailableTickets.textContent=filmObj.capacity;
    
}
//rendering filmposters on the 
function displayImage(src) {
    const image = document.createElement("img");
    image.src = src;
    image.className="image-item";
    // Clear the previous image
    renderPoster.innerHTML = ""; 
    renderPoster.appendChild(image);
}
buyingTicket.addEventListener("click",(e)=>{
    filmObj.capacity=(filmObj.capacity-filmObj.tickets_sold);
    renderFilmAvailableTickets.textContent=filmObj.capacity
})
})



