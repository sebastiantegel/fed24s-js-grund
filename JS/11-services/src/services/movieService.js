import { Movie } from "../models/movie";
import { get } from "./serviceBase";

const BASE_URL = `http://omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&`;

export const getMovies = async (searchText) => {
  const omdbResponse = await get(`${BASE_URL}s=${searchText}`);

  return omdbResponse.Search.map(
    (movie) => new Movie(movie.Title, movie.Poster, movie.imdbID)
  );
};

export const getMovieById = async (imdbID) => {
  return await get(`${BASE_URL}i=${imdbID}`);
};
