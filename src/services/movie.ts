export type Movie = {
  overview: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  adult: boolean;
  genres: [];
  runtime: number;
};

export const getMovie = async (id: number): Promise<Movie> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=92b418e837b833be308bbfb1fb2aca1e&language=fr-FR`,
    {
      method: "GET",
    }
  );
  return response.json();
};
