import { Movie } from "../models/Movie";
import { getMovieById } from "../services/movieService";

export const createHtml = (movies: Movie[]) => {
  const moviesContainer = document.getElementById("movies");

  if (moviesContainer) {
    moviesContainer.innerHTML = "";
  }

  movies.forEach((movie) => {
    const container = document.createElement("div");
    const title = document.createElement("h3");
    const poster = document.createElement("img");

    container.addEventListener("click", async () => {
      const movieExtended = await getMovieById(movie.imdbID);

      const title = document.getElementById("exampleModalLabel");
      if (title) {
        title.innerHTML = movie.Title;
      }

      const body = document.getElementById("modalBody");

      if (body) {
        body.innerHTML = "";

        const plot = document.createElement("p");
        const actors = document.createElement("p");
        const director = document.createElement("p");

        plot.innerHTML = movieExtended.Plot;
        actors.innerHTML = movieExtended.Actors;
        director.innerHTML = movieExtended.Director;

        body.appendChild(director);
        body.appendChild(actors);
        body.appendChild(plot);
      }
    });

    container.className = "movie-container";
    container.setAttribute("data-bs-toggle", "modal");
    container.setAttribute("data-bs-target", "#exampleModal");
    title.innerHTML = movie.Title;
    poster.src = movie.Poster;
    poster.alt = movie.Title;

    container.appendChild(title);
    container.appendChild(poster);

    moviesContainer?.appendChild(container);
  });
};
