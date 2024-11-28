import "./style.css";

// const x = 30;

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (x > 10) {
//       resolve("Det gick bra, talet är större än 10");
//     } else {
//       reject({ code: 500, message: "Det blev rejält fel denna gång" });
//     }
//   }, 3000);
// });

// p.then(
//   (message) => {
//     console.log(message);
//   },
//   (error) => {
//     console.log(error.message);
//   }
// );

// fetch("https://omdbapi.com/?apikey=416ed51a&s=star")
//   .then((response) => response.json())
//   .then((omdbResponse) => {
//     const movies = omdbResponse.Search;
//     console.log(movies);
//     createHtml(movies);
//   });

// function getMovies() {
//   fetch("https://omdbapi.com/?apikey=416ed51a&s=star")
//     .then((response) => response.json())
//     .then((omdbResponse) => {
//       const movies = omdbResponse.Search;
//       console.log(movies);
//       createHtml(movies);
//     });
// }

async function getMovies(e) {
  e.preventDefault(); // Forms
  const searchInput = document.getElementById("searchText");
  const searchText = searchInput.value;

  const response = await fetch(
    `https://omdbapi.com/?apikey=416ed51a&s=${searchText}`
  );
  const omdbResponse = await response.json();
  createHtml(omdbResponse.Search);

  searchInput.value = "";
}

document.getElementById("searchForm").addEventListener("submit", getMovies);

const moviesContainer = document.getElementById("movies");

const createHtml = (movies) => {
  moviesContainer.innerHTML = "";

  movies.forEach((movie) => {
    const movieContainer = document.createElement("div");
    const title = document.createElement("h2");
    const poster = document.createElement("img");

    title.innerHTML = movie.Title;
    poster.src = movie.Poster;
    poster.alt = movie.Title;

    movieContainer.appendChild(title);
    movieContainer.appendChild(poster);
    moviesContainer.appendChild(movieContainer);
  });
};
