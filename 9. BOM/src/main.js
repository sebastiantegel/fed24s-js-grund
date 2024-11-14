import "./style.css";
import { Location } from "./models/Location";

let watchId = 0;
const locations = JSON.parse(localStorage.getItem("locations")) || [];

document.getElementById("getonce").addEventListener("click", () => {
  // navigator.geolocation.getCurrentPosition((position) => {
  //   console.log(position);
  // });

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const myCurrentPosition = new Location(
        pos.coords.latitude,
        pos.coords.longitude
      );
      console.log("Location:", myCurrentPosition);
    },
    (err) => {
      console.log("ERROR:", err);
    }
  );
});

document.getElementById("watch").addEventListener("click", () => {
  watchId = navigator.geolocation.watchPosition(
    (pos) => {
      const myCurrentPosition = new Location(
        pos.coords.latitude,
        pos.coords.longitude
      );
      locations.push(myCurrentPosition);
      localStorage.setItem("locations", JSON.stringify(locations));
      console.log("Locations:", locations);
    },
    (err) => {
      console.log("ERROR:", err);
    }
  );
});

document.getElementById("clear").addEventListener("click", () => {
  navigator.geolocation.clearWatch(watchId);
});

document.getElementById("getmovies").addEventListener("click", async () => {
  const response = await fetch("https://omdbapi.com/?apikey=416ed51a&s=harry");
  const result = await response.json();

  console.log(result.Search);

  const moviesContainer = document.getElementById("movies");

  for (let i = 0; i < result.Search.length; i++) {
    const container = document.createElement("div");
    const title = document.createElement("h3");
    const img = document.createElement("img");

    container.className = "movie";
    title.innerHTML = result.Search[i].Title;
    img.src = result.Search[i].Poster;
    img.alt = result.Search[i].Title;

    container.appendChild(title);
    container.appendChild(img);

    moviesContainer.appendChild(container);
  }
});
