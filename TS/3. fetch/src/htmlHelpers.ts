import { IMovie } from "./models/IMovie";

export function createHtml(movies: IMovie[]) {
  const moviesContainer = document.getElementById("movies");

  if (moviesContainer) {
    moviesContainer.innerHTML = "";
  }

  movies.forEach((movie) => {
    const movieContainer = document.createElement("div");
    const heading = document.createElement("h3");
    const image = document.createElement("img");

    heading.innerHTML = movie.Title;
    image.src = movie.Poster;
    image.alt = movie.Title;

    movieContainer.appendChild(heading);
    movieContainer.appendChild(image);

    moviesContainer?.appendChild(movieContainer);
  });
}
