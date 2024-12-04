import axios from "axios";
import { createHtml } from "./htmlHelpers";
import { IOmdbResponse } from "./models/IOmdbResponse";
import "./style.css";

document.getElementById("getMovies")?.addEventListener("click", async () => {
  const response = await fetch("https://omdbapi.com/?apikey=416ed51a&s=star");
  const result: IOmdbResponse = await response.json();

  createHtml(result.Search);
});

document
  .getElementById("getMoviesAxios")
  ?.addEventListener("click", async () => {
    const response = await axios.get<IOmdbResponse>(
      "https://omdbapi.com/?apikey=416ed51a&s=star"
    );

    createHtml(response.data.Search);
  });
