//#region DOM

const pTag = document.getElementById("userName");

console.log(pTag);

if (pTag !== null) {
  pTag.innerHTML = "Hanna";
  pTag.className = "person";
}

const myImage = document.createElement("img"); // myImage = <img />
myImage.src =
  "https://www.womenfitness.net/wp/wp-content/uploads/2020/07/running.jpg";
myImage.alt = "Running woman"; // <img src="....." alt="Running woman" />

const theDiv = document.getElementById("container");
theDiv.className = "image-container";

theDiv.appendChild(myImage);

//#endregion

//#region Functions

// Skapa funktion, används inte
// function greeting(firstName) {
//   console.log("Hej", firstName);
//   //alert("Hello world, again");
// }

const greeting = (firstName) => {
  console.log("Hej", firstName);
};

// Används funktionen (anropas)
// Koden i funktionen körs
greeting("Sebastian");
greeting("Hanna");

//#endregion
