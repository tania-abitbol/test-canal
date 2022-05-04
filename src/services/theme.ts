export type Theme = {
  genres: [];
};

export const getThemes = async (): Promise<Theme> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=92b418e837b833be308bbfb1fb2aca1e&language=fr-FR`,
    {
      method: "GET",
    }
  );
  return response.json();
};
