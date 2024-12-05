import { createHtml } from "./helpers/htmlHelper";
import { getMovies } from "./services/movieService";
import "./style.css";

document.getElementById("searchForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  // 1. Hitta söktexten
  const theInputTag = document.getElementById("searchText");

  let searchText = "";
  if (theInputTag) {
    searchText = (theInputTag as HTMLInputElement).value;
  }

  // Validering
  const moviesContainer = document.getElementById("movies");
  if (moviesContainer) {
    moviesContainer.innerHTML = "";
  }

  if (searchText.length < 2) {
    const error = document.createElement("p");
    error.innerHTML = "Du måste skriva minst två tecken innan du söker";
    error.className = "error";
    moviesContainer?.appendChild(error);
    return;
  }

  // 2. Hämta filmer
  const movies = await getMovies(searchText);

  // 3. Presentera filmer
  createHtml(movies);
});
