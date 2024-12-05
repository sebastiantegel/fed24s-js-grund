export type Movie = {
  Title: string;
  Poster: string;
  imdbID: string;
};

export type MovieExt = Movie & {
  Actors: string;
  Director: string;
  Plot: string;
};
