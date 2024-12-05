import { MovieExt } from "../models/Movie";
import { OmdbResponse } from "../models/OmdbResponse";
import { get } from "./serviceBase";

const BASE_URL = `http://omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&`;

export const getMovies = async (searchText: string) => {
  const response = await get<OmdbResponse>(`${BASE_URL}s=${searchText}`);
  return response.Search;
};

export const getMovieById = async (id: string) => {
  return await get<MovieExt>(`${BASE_URL}i=${id}`);
};
