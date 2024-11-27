import { Movie } from "../models/movie";

const BASE_URL = "http://omdbapi.com/?apikey=416ed51a&";

export const getMovies = async (searchText) => {
  const response = await fetch(`${BASE_URL}s=${searchText}`);
  const omdbResponse = await response.json();

  //   console.log("omdbResponse", omdbResponse.Search);

  return omdbResponse.Search.map(
    (movie) => new Movie(movie.Title, movie.Poster, movie.imdbID)
  );

  // [{Title: "", Poster: ""}, {...}, ...]
  //  -> map ->
  // [{title: "", imageUrl: ""}, {...}, ...]
};

export const getMovieById = async (imdbID) => {
  const response = await fetch(`${BASE_URL}i=${imdbID}`);

  const movie = await response.json();

  return movie;
};
