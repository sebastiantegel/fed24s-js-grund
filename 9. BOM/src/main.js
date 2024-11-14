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
