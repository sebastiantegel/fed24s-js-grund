import { getMovieById, getMovies } from "./services/movieService";
import "./style.css";

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const search = searchInput.value;
  if (search) {
    const movies = await getMovies(search); // [{...}, {...}, ...]
    createHtml(movies);
    searchForm.reset();
  }
});

const getMovie = async (imdbID) => {
  const movie = await getMovieById(imdbID);
  createHtmlForMovie(movie);
};

const createHtml = (movies) => {
  moviesContainer.innerHTML = "";

  movies.forEach((movie) => {
    const movieDiv = document.createElement("div");
    movieDiv.classList.add("movie");

    const viewMoreButton = document.createElement("button");
    viewMoreButton.textContent = "View More";
    viewMoreButton.setAttribute("data-bs-toggle", "modal");
    viewMoreButton.setAttribute("data-bs-target", "#movieModal");
    movieDiv.appendChild(viewMoreButton);
    viewMoreButton.addEventListener("click", () => {
      getMovie(movie.imdbID);
    });

    const title = document.createElement("h2");
    title.textContent = movie.title;
    movieDiv.appendChild(title);

    const img = document.createElement("img");
    img.src = movie.imageUrl;
    img.alt = movie.title;
    movieDiv.appendChild(img);

    moviesContainer.appendChild(movieDiv);
  });
};

function createHtmlForMovie(movie) {
  movieModalLabel.textContent = movie.Title;

  modalBody.innerHTML = "";
  const img = document.createElement("img");
  img.src = movie.Poster;
  img.alt = movie.Title;
  modalBody.appendChild(img);

  const director = document.createElement("p");
  director.textContent = `Director: ${movie.Director}`;
  modalBody.appendChild(director);

  const actors = document.createElement("p");
  actors.textContent = `Actors: ${movie.Actors}`;
  modalBody.appendChild(actors);

  const plot = document.createElement("span");
  plot.textContent = movie.Plot;
  modalBody.appendChild(plot);
}
